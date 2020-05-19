import { BookmarksService } from './bookmarks.service';
import { Module } from '@nestjs/common';
import { BookmarksController } from 'bookmarks/bookmarks.controller';

@Module({
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule {}
