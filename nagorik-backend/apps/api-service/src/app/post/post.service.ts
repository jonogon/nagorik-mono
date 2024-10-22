import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserOtpModel, userSchema } from '@nagorik-backend/db-models';
import { PostInterface, UserInterface, UserOtpInterface } from '@nagorik-backend/interfaces';
import { BcryptService } from '@nagorik-backend/utils';

@Injectable()
export class PostService {
  constructor(@InjectModel('post') private postModel: Model<PostInterface>) {}

  async createPost(
    postObj: PostInterface
  ): Promise<{ message: string }> {
    console.log('create-post',postObj);
    const post = await this.postModel.create(postObj);
    console.log('post',post);
    return { message: `Post created` };
  }
}
