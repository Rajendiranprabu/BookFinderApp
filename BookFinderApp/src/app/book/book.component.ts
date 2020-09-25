import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: string[];

  id: number;

  book: string;

  constructor(service: BookService, private route: ActivatedRoute) {

    this.books = service.getBooks();
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.book = this.books[this.id];
      console.log(this.id);
    })
    this.route.queryParamMap.subscribe(queryparam => {
      let id = queryparam.get("id");
      let auth = queryparam.get('auth');
    })
  }

}
