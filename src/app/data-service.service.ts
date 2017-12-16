import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Book } from './book';
import { Template } from './template';
import indexMock from './index-mock.json';
import templatesMock from './templates-mock.json';

@Injectable()
export class DataService {

  getBooks() {
    const BOOKS: Book[] = indexMock;
    return BOOKS;
  }

  getArticle(id: string) {
    const TEMPLATE: Template = _.find(templatesMock, (o) => {return o.id === id});
    return TEMPLATE;
  }

  constructor() { }

}
