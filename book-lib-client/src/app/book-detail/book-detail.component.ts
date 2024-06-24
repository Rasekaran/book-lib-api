import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, of, switchMap, tap } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../service/book.svc';
import { AuthorService } from '../service/author.svc';
import { Author } from '../model/author';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  public bookForm: FormGroup;

  protected bookDetails: Observable<Book>;

  public selectedAuthorId: number = 1;

  public isEdit: Observable<boolean>;
  protected subs: Subscription[];

  constructor(
    protected bookService: BookService,
    protected authorService: AuthorService,
    protected formBuilder: FormBuilder,
    private route: ActivatedRoute ) {
    // this.books = new BehaviorSubject([] as Book[]);
    this.subs = [];
    this.bookForm = this.formBuilder.group({
      id: [ ],
      name: [ ],
      isbn: [ ],
      author: [ ]
    });
  }
  ngAfterViewInit(): void {
    this.subs.push(
      this.isEdit.subscribe( edit => edit ? this.bookForm.enable() : this.bookForm.disable()
    ));
  }

  public ngOnInit(): void {
    this.isEdit = this.route.data.pipe(
      map( data => data.edit )
    );
    
    this.bookDetails = this.getPathParamId().pipe(
      switchMap( id => this.bookService.getBookDetails( id ) ),
      tap( book => {
        this.bookForm.controls.id.setValue( book.id );
        this.bookForm.controls.name.setValue( book.name );
        this.bookForm.controls.isbn.setValue( book.isbn );
        this.bookForm.controls.author.setValue( book.author.id );
      })
    );
  }

  public ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe() );
  }

  protected getPathParamId(): Observable<number> {
    return this.route.paramMap.pipe(
      map( params => +( params.get('id') || 1 ))
    )
  }

  public getAuthors( author?: Author ) {
    return this.isEdit.pipe(
      switchMap( edit => {
        if( !edit && author ) {
          return of([ author ]);
        }
        return this.authorService.getAuthors();
      })
    );
  }

  public onSubmit() {
    console.log( 'Submited' );
  }
}
