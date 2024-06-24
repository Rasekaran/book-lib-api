import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Book } from '../model/book';
import { Author } from '../model/author';
import { BookService } from '../service/book.svc';
import { AuthorService } from '../service/author.svc';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail-edit',
  templateUrl: './book-detail-edit.component.html',
  styleUrl: './book-detail-edit.component.scss'
})
export class BookDetailEditComponent {
  public bookDetails: Observable<Book>;

  public authors: Observable<Author[]>;

  constructor(
    protected bookService: BookService,
    protected authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router ) {

    this.bookDetails = this.getPathParamId().pipe(
      switchMap( id => this.bookService.getBookDetails( id ) ),
    );
    this.authors = this.authorService.getAuthors();
  }

  protected getPathParamId(): Observable<number> {
    return this.route.paramMap.pipe(
      map( params => +( params.get('id') || 1 ))
    )
  }

  public onSubmit( book: Book ) {
    const authorId: number = ( book as any ).author;
    book.author = {
      id: authorId,
    } as any;
    this.bookService.updateBook( book ).subscribe({ complete: () => {
      alert( 'Book details updated' );
      this.router.navigate([ 'book/', book.id ]);
    }})
  }
}
