import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "./test.reuest.get";

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent implements OnInit {
  // state
  bookList: Book | null = null; // Initialize as null

  // get api
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Book>(`https://anapioficeandfire.com/api/characters/583`)
      .subscribe(response => {
        this.bookList = response; // Assign response to 'book'
      });
  }
}
