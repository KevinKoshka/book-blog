import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../book';
import { UtilitiesService } from '../utilities.service';
import { ObService } from '../ob-service.service';
import { Article } from '../article';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

  subscription: Subscription;

  current = {
    bookname: '',
    chaptername: '',
    pagename: ''
  }

  makeID(book, chapter?, page?) {
    book = this.util.idify(book);
    chapter = chapter ? this.util.idify(chapter) : undefined;
    page = page ? this.util.idify(page) : undefined;
    if(page) {
      return {
        header: () => {
          let i: string = 'H' + book + chapter + page;
          return i;
        },
        collapse: () => {
          let i: string = 'C' + book + chapter + page;
          return i;
        }
      }
    } else if (chapter) {
      return {
        header: () => {
          let i: string = 'H' + book + chapter;
          return i;
        },
        collapse: () => {
          let i: string = 'C' + book + chapter;
          return i;
        }
      }
    } else {
      return {
        header: () => {
          let i: string = 'H' + book;
          return i;
        },
        collapse: () => {
          let i: string = 'C' + book;
          return i;
        }
      }
    }
  }

  constructor(
    private util: UtilitiesService,
    private obService: ObService
  ) {
    this.obService.clickedPage$.subscribe(
      article => {
        this.current.bookname = util.idify(article.title);
        this.current.chaptername = util.idify(article.chapter);
        this.current.pagename = util.idify(article.subtitle);
      }
    )
  }

  ngOnInit() {
  }

}
