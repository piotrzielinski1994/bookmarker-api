import { Bookmarks } from 'bookmarks/bookmarks';

export class Bookmark {
  id: number;
  title: string;
  href?: string;
  items?: Bookmarks;
}
