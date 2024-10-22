import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostInterface } from '@nagorik-backend/interfaces';

import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern({ cmd: 'create-post' })
  async createPost(payload: PostInterface) {
    const createdPost = await this.postService.createPost(
      payload
    );
    return createdPost;
  }

  @MessagePattern({ cmd: 'view-all-posts' })
  async viewAllPost() {
    const viewAllPost = await this.postService.viewAllPosts();
    return viewAllPost;
  }
}
