import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.svc';
import { AuthorService } from '../service/author.svc';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

@Component({
  selector: 'app-book-detail-new',
  templateUrl: './book-detail-new.component.html',
  styleUrl: './book-detail-new.component.scss'
})
export class BookDetailNewComponent {

  public authors: Observable<Author[]>;

  constructor(
    protected bookService: BookService,
    protected authorService: AuthorService,
    private router: Router ) {
      this.authors = this.authorService.getAuthors();
    }

  public onSubmit( book: Book ) {
    const authorId: number = ( book as any ).author;
    book.author = {
      id: authorId,
    } as any;
    this.bookService.createBook( book ).subscribe( createdBook => {
      alert( 'Book details created' );
      this.router.navigate([ 'book/', createdBook.id ]);
    });
  }
}
