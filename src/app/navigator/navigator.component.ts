import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from '../book';
import { Article } from '../article';
import { DataService } from '../data-service.service';
import { ObService } from '../ob-service.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

  aBook: Article;

  onSelect(title, chapter, subtitle, id, order): void {
    this.aBook = {
      title : title,
      chapter: chapter, 
      subtitle: subtitle,
      template: '',
      id: id,
      order: order
    };
    this.obService.clickPage(this.aBook);
  }

  constructor(
    private dataService: DataService,
    private obService: ObService
  ) { }

  ngOnInit() {
  }

}
