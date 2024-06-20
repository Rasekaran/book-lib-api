import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../service/rest-api.svc';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subscription, map, tap } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  // standalone: true,
  // imports: [
  //   MatTableModule,
  //   CommonModule
  // ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {

  public books: BehaviorSubject<Book[]>;
  displayedColumns = [ 'id', 'name' ];
  protected subs: Subscription[] = [];

  constructor( protected apiService: RestAPIService ) {
    this.books = new BehaviorSubject([] as Book[]);
  }

  

  public ngOnInit(): void {
    // this.books = this.getBooks();
    this.fetchBooks();
  }

  public fetchBooks() {
    this.subs.push( this.apiService.get( 'books' ).pipe(
      map( books => books || [] ),
      tap( bs => this.books.next( bs as Book[] ) )
    ).subscribe());
  }
}
