import { Injectable, Logger } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MongoDbConnectionService implements MongooseOptionsFactory {
  private readonly logger = new Logger(MongoDbConnectionService.name);

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env['MONGO_URI'],
      onConnectionCreate: (connection: Connection) => {
        this.onConnectionCreate(connection); // Ensure connection events are set here
      },
    };
  }

  private onConnectionCreate(connection: Connection) {
    this.logger.log('MongoDB connection is being created');


    connection.on('connected', () => {
      this.logger.log(`MongoDB connected successfully to ${process.env['MONGO_ALIAS']}`);
    });

    connection.on('error', (err) => {
      this.logger.error(`MongoDB connection error: ${err.message}`);
    });

    connection.on('disconnected', () => {
      this.logger.warn('MongoDB disconnected');
    });

    // Enable debug mode, if needed
    connection.set('debug', process.env['MONGO_DEBUG'] === 'false');
  }
}
