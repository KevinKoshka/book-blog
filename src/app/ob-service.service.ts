import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Article } from './article';

@Injectable()
export class ObService {
  //Subject que mantiene la lista de observadores
  private clickedPageSource = new Subject<Article>();

  clickedPage$ = this.clickedPageSource.asObservable();

  clickPage(article: Article) {
    this.clickedPageSource.next(article);
  }
}
