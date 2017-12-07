import { Injectable } from '@angular/core';
import DbMock from './db-mock.json';

@Injectable()
export class DataService {

  getBooks() {
    if(DbMock){alert('dbmock is here');}
  }

  constructor() { }

}
