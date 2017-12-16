import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { Book } from '../book';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() books: Book[];
  currentTitle: string;
  currentOrder: number;

  onArticleChange(event) {
    this.currentTitle = event.title;
    this.currentOrder = event.order;
  }

  onPageTurn(where: number) {
    let theBook = _.find(this.books,['name', this.currentTitle]);
    console.log(theBook);
    _.forEach(theBook.chapters, (i) => {
      console.log(_.find(i.pages, ['order', this.currentOrder + where]));
    });
    console.log(this.currentOrder);
  }

  constructor() { }

  ngOnInit() {
  }

}
