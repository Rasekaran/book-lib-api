import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, map, tap } from 'rxjs';
import { Author } from '../model/author';
import { RestAPIService } from '../service/rest-api.svc';
import { AuthorService } from '../service/author.svc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent {
  public authors: BehaviorSubject<Author[]>;
  displayedColumns = [ 'id', 'name' ];
  protected subs: Subscription[] = [];

  constructor(
    protected authorService: AuthorService,
    private router: Router ) {
    this.authors = new BehaviorSubject([] as Author[]);
  }

  

  public ngOnInit(): void {
    // this.books = this.getBooks();`
    this.fetchBooks();
  }

  public fetchBooks() {
    this.subs.push( this.authorService.getAuthors().pipe(
      map( authors => authors || [] ),
      tap( bs => this.authors.next( bs as Author[] ) )
    ).subscribe());
  }

  public viewAuthor( id: string ) {
    this.router.navigate(['author/', id]);
  }

  public create() {
    this.router.navigate([ 'author/new' ]);
  }
}
