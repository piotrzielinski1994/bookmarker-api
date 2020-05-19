import { Injectable } from '@nestjs/common';
import { Bookmarks } from 'bookmarks/bookmarks';
import { Bookmark } from 'bookmarks/bookmark';
import { isNumber } from 'util';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmarks = {
    1: {
      id: 1,
      title: 'Test_1',
      href: 'https://google.com',
    },
    2: {
      id: 2,
      title: 'Test_2',
      href: 'https://google.com',
    },
    3: {
      id: 3,
      title: 'Test_3_catalog',
      items: {
        4: {
          id: 4,
          title: 'Test_4',
          href: 'https://google.com',
        },
        5: {
          id: 5,
          title: 'Test_5',
          href: 'https://google.com',
        },
        6: {
          id: 6,
          title: 'Test_6_catalog',
          items: {
            7: {
              id: 7,
              title: 'Test_7',
              href: 'https://google.com',
            },
            8: {
              id: 8,
              title: 'Test_7',
              href: 'https://google.com',
            },
          },
        },
      },
    },
  };

  get(): Bookmarks {
    return this.bookmarks;
  }

  create(newBookmark: Bookmark): Bookmark {
    const id = Date.now();
    return (this.bookmarks[id] = { ...newBookmark, id });
  }

  delete(id: number): boolean {
    if (this.bookmarks[id] === undefined) {
      return false;
    }

    delete this.bookmarks[id];
  }
}
