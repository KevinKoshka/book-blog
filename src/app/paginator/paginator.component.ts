import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { Book } from '../book';
import { Article } from '../article';
import { ObService } from '../ob-service.service';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() books: Book[];
  currentTitle: string;
  currentOrder: number;
  article: Article = {
    title: '',
    chapter: '',
    subtitle: '',
    template: '',
    id: '',
    order: undefined
  };
  button = {
    nextDisabled: false,
    previousDisabled: false
  }

  onArticleChange(event) {
    this.currentTitle = event.title;
    this.currentOrder = event.order;
  }

  onPageTurn(where: number) {
    let theBook = _.find(this.books,['name', this.currentTitle]);
    _.forEach(theBook.chapters, (cVal, cIndex, cCollection) => {
      let x = _.find(cVal.pages, (pVal, pIndex, pCollection) => {
        if(pVal.order == (this.currentOrder + where)) {
          if(((pIndex === pCollection.length) && (cIndex === cCollection.length)) && (this.button.nextDisabled === false)) {
            this.button.nextDisabled = true;
          } else if(this.button.nextDisabled) {
            this.button.nextDisabled = false;
          }
          if(((pIndex === 0) && (cIndex === 0)) && (this.button.previousDisabled === false)) {
            this.button.previousDisabled = true;
          } else if(this.button.previousDisabled) {
            this.button.previousDisabled = false;
          }
          return true;
        }
      });
      if (x != undefined) {
        this.currentOrder = x.order;
        this.article = {
          title: theBook.name,
          chapter: cVal.title,
          subtitle: x.title,
          template: '',
          id: x.id,
          order: x.order
        }
        this.article.template = this.dataService.getArticle(this.article.id).template;
        this.obService.clickPage(this.article);
        console.log(this.article);
        return false;
      } else {
        return true;
      }
    });
  }

  constructor(
    private obService: ObService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

}
