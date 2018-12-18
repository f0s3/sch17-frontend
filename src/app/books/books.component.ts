import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: [];

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.get().subscribe(data => this.books = data['books']);
  }

}
