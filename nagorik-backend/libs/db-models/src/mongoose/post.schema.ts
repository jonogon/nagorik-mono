import { Schema, model } from 'mongoose';

import { PostInterface } from '@nagorik-backend/interfaces';

export const postSchema = new Schema<PostInterface>(
  {
    userId: { type: String, required: true},
    category: { type: String },
    subCategory: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String] },
    tags: { type: [String] },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = model<PostInterface>('post', postSchema);
