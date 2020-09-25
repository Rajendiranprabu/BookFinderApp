import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookscategory = [
    "Thriller",
    "Romance"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
