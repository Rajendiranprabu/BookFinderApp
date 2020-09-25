import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: string[]
  constructor() {

    this.books = [
      "Java Complete Referencce",
      "Angular IO",
      "C# Complete Reference"
    ];
  }


  getBooks() {
    return this.books;
  }
}
