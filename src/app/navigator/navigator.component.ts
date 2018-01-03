import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

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

  constructor(private util: UtilitiesService) { }

  ngOnInit() {
  }

}
