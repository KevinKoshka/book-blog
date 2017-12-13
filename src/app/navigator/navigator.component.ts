import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from '../book';
import { DataService } from '../data-service.service';
import { ObService } from '../ob-service.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

  aBookId;

  onSelect(page): void {
    this.aBookId = page.id;
    this.obService.clickedPage(this.aBookId);
  }

  constructor(
    private dataService: DataService,
    private obService: ObService
  ) { }

  ngOnInit() {
  }

}
