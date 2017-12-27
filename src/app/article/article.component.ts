import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ObService} from '../ob-service.service';
import { DataService } from '../data-service.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article = {
    title: '',
    chapter: '',
    subtitle: '',
    template: '',
    id: '',
    order: undefined,
    pages: undefined
  }
  
  constructor(
    private dataService: DataService,
    private obService: ObService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      let article: Article | Error = this.dataService.getArticleInfo(params.id);
      if(article instanceof Article) {
        this.article = article;
        //Dispara y envía info a los suscriptores.
        this.obService.clickPage(this.article);
      } else if(article instanceof Error) {
        this.router.navigate(['articles', 'articleNotFound']);
      }
    });
  }

  ngOnInit() {
  }

}
