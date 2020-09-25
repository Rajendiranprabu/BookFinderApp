import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exprest',
  templateUrl: './exprest.component.html',
  styleUrls: ['./exprest.component.css']
})
export class ExprestComponent implements OnInit {

  posts: any[];

  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {

    httpClient.get(this.url).subscribe((data: any[]) => {

      this.posts = data;

      // console.log(this.posts[1]);
    })

  }


  ngOnInit(): void {
  }

  insertPost(title) {

    let post = { title: title.value }
    this.httpClient.post(this.url, JSON.stringify(post))
    //      .subscribe(response => post['id'] = response);

    //this.posts.unshift(post);

    this.httpClient.get(this.url).subscribe((data: any[]) => {

      this.posts = data;

      console.log(this.posts[1]);
    })

  }



}


