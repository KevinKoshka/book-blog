import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private dataService: DataService) { }

  BOOKS: Book[];

  getBooks() {
    this.BOOKS = this.dataService.getBooks();
  }

  ngOnInit() {
    this.getBooks();
    console.log(this.BOOKS);
  }

}
