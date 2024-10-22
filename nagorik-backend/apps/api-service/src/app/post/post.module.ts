import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { postSchema } from '@nagorik-backend/db-models';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'post', schema: postSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
