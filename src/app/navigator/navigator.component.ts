import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  @Input() books: Book[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
