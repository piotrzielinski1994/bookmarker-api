import { BookmarksService } from './bookmarks.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Bookmarks } from 'bookmarks/bookmarks';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Get()
  async index(): Promise<Bookmarks> {
    return this.bookmarksService.get();
  }
}
