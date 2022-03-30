import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() post: FeedPost) {
    return this.feedService.createPost(post);
  }
}
