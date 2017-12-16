import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ObService } from '../ob-service.service';
import { DataService } from '../data-service.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  subscription: Subscription;
  article: Article = {
    title: '',
    chapter: '',
    subtitle: '',
    template: '',
    id: '',
    order: undefined
  }
  
  @Output() articleChange = new EventEmitter<{title: string, order: number}>();

  constructor(
    private obService: ObService,
    private dataService: DataService
  ) {
    this.subscription = obService.clickedPage$.subscribe(
      article => {
        this.article = article;
        this.article.template = dataService.getArticle(article.id).template;
        this.articleChange.emit({title: this.article.title, order: this.article.order});
      }
    );
  }

  ngOnInit() {
  }

}
