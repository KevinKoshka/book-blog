import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
