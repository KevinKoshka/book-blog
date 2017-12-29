interface IPage {
  title: string;
  order: number;
  id: string;
}
class Page {
  title: string;
  order: number;
  id: string;
  constructor(page: IPage) {
    this.title = page.title;
    this.order = page.order;
    this.id = page.id;
  }
}

interface IChapter {
  title: string;
  order: number;
  pages: Array<Page>;
}
class Chapter {
  title: string;
  order: number;
  pages: Array<Page>;
  constructor(chapter: IChapter) {
    this.title = chapter.title;
    this.order = chapter.order;
    this.pages = chapter.pages;
  }
}

interface IBook {
  name: string;
  pages: number;
  chapters: Array<Chapter>;
}
export class Book {
  name: string;
  pages: number;
  chapters: Array<Chapter>;
  constructor(book: IBook) {
    this.name = book.name;
    this.pages = book.pages;
    this.chapters = book.chapters;
  }
}
