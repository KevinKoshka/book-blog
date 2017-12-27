import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private dataService: DataService) { }
  
    bookList: Book[];
  
    getBooks() {
      this.bookList = this.dataService.getBooks();
    }
  
    ngOnInit() {
      this.getBooks();
    }
  
}
