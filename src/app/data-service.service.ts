import { Injectable } from '@angular/core';
import { Book } from './book';
import DbMock from './db-mock.json';

@Injectable()
export class DataService {

  getBooks() {
    const BOOKS: Book[] = DbMock;
    return BOOKS;
  }

  constructor() { }

}
