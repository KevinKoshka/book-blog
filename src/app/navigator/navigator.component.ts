import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from '../book';
import { DataService } from '../data-service.service';

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
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
