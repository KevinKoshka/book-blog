import { Injectable } from '@angular/core';
import { Book } from './book';
import indexMock from './index-mock.json';

@Injectable()
export class DataService {

  getBooks() {
    const BOOKS: Book[] = indexMock;
    return BOOKS;
  }

  constructor() { }

}
