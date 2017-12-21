import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ObService} from '../ob-service.service';
import { DataService } from '../data-service.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
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
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe((params) => {
      this.article = this.dataService.getArticleInfo(params.id);
      this.obService.clickPage(this.article);
    })
  }

  ngOnInit() {
  }

}
