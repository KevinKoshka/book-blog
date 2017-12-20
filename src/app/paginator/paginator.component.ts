import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router, NavigationEnd } from '@angular/router';

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
/*   currentTitle: string;
  currentOrder: number;
  currentPages: number; */
  article: Article = {
    title: '',
    chapter: '',
    subtitle: '',
    template: '',
    id: '',
    order: undefined,
    pages: undefined
  };
  button = {
    nextDisabled: false,
    previousDisabled: false
  }

  onArticleChange(event) {
/*     alert('hola');
    this.currentTitle = event.title;
    this.currentOrder = event.order;
    this.currentPages = event.pages; */
  }

  onPageTurn(where: number) {/* 
    let theBook = _.find(this.books,['name', this.currentTitle]);
    _.forEach(theBook.chapters, (cVal, cIndex, cCollection) => {
      let x = _.find(cVal.pages, (pVal, pIndex, pCollection) => {
        if(pVal.order === (this.currentOrder + where)) {
          if(((pIndex === pCollection.length - 1) && (cIndex === cCollection.length - 1)) && (this.button.nextDisabled === false)) {
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
      if ((x != undefined) && ((this.currentOrder + where) >= 0)) {
        this.currentOrder = x.order;
        this.article = {
          title: theBook.name,
          chapter: cVal.title,
          subtitle: x.title,
          template: '',
          id: x.id,
          order: x.order,
          pages: theBook.pages
        }
        this.article.template = this.dataService.getArticle(this.article.id).template;
        this.obService.clickPage(this.article);
        return false;
      } else {
        return true;
      }
    }); */
  }

  constructor(
    private obService: ObService,
    private dataService: DataService,
    private router: Router
  ) {
    router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd) {
          let id = val.url.slice(val.url.lastIndexOf('/articles/'));
          //this.article = this.dataService.getArticleInfo(id);
          console.log(id);
        }
      }
    );
   }

  ngOnInit() {
  }

}
