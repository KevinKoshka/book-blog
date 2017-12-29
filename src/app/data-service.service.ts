import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Book } from './book';
import { Template } from './template';
import { Article } from './article';
import indexMock from './index-mock.json';
import templatesMock from './templates-mock.json';

@Injectable()
export class DataService {

  getBooks() {
    const BOOKS: Book[] = indexMock as Book[];
    return BOOKS;
  }

  getArticle(id: string): Template {
    const TEMPLATE: Template = new Template(_.find(templatesMock, (o) => {return o.id === id}));
    return TEMPLATE;
  }

  getArticleInfo(id: string): Article | Error {
    let bookCollection: Book[] = this.getBooks();
    let article: Article;
    let searchResult: boolean = !_.every( bookCollection, 
      (bookVal, bookIndex, bookCol) => {
        return _.every( bookVal.chapters,
          (chapterVal, chapterIndex, chapterCol) => {
            let thePage =  _.find( chapterVal.pages, ['id', id]);
            if(thePage) {
              article = new Article({
                title: bookVal.name,
                chapter: chapterVal.title,
                subtitle: thePage.title,
                template: this.getArticle(id).template,
                id: id,
                order: thePage.order,
                pages: bookVal.pages
              });
              return false;
            } else {
              return true;
            }
          }
        )
      }
    );
    if(searchResult) {
      return article;
    } else {
      console.error('Error: Article id not found.');
      return new Error('Error: Article id not found.');
    }
    
  }

  getArticleByOrder(bookName: string, order: number): string | Error {
    let bookCollection: Book[] = this.getBooks();
    let article: Article;
    let theBook = _.find( bookCollection, ['name', bookName]);
    let searchResult = !_.every( theBook.chapters,
      (chapterVal, chapterIndex, chapterCol) => {
        let thePage = _.find( chapterVal.pages, ['order', order]);
        if(thePage) {
          article = new Article({
            title: theBook.name,
            chapter: chapterVal.title,
            subtitle: thePage.title,
            template: this.getArticle(thePage.id).template,
            id: thePage.id,
            order: thePage.order,
            pages: theBook.pages
          });
          return false;
        } else {
          return true;
        }
      }
    );
    if(searchResult) {
      return article.id
    } else {
      console.error('Error: Article order not found.');
      return new Error('Error: Article order not found.');
    }
  }

  constructor() { }

}
