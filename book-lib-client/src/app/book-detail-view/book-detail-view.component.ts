import { Component } from '@angular/core';
import { BookService } from '../service/book.svc';
import { AuthorService } from '../service/author.svc';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, switchMap, tap } from 'rxjs';
import { Book } from '../model/book';
import { Author } from '../model/author';

@Component({
  selector: 'app-book-detail-view',
  templateUrl: './book-detail-view.component.html',
  styleUrl: './book-detail-view.component.scss'
})
export class BookDetailViewComponent {

  public bookDetails: Observable<Book>;

  public authors: Observable<Author[]>;

  constructor(
    protected bookService: BookService,
    protected authorService: AuthorService,
    private route: ActivatedRoute ) {

    this.bookDetails = this.getPathParamId().pipe(
      switchMap( id => this.bookService.getBookDetails( id ) ),
    );
    this.authors = this.bookDetails.pipe(
      map( book => [ book.author ] )
    )
  }

  protected getPathParamId(): Observable<number> {
    return this.route.paramMap.pipe(
      map( params => +( params.get('id') || 1 ))
    )
  }
}
