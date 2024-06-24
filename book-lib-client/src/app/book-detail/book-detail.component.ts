import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class BookDetailComponent implements OnChanges {

  public bookForm: FormGroup;

  @Input()
  public bookDetails: Book;

  @Input()
  public authors: Author[];

  @Input()
  public isEdit: boolean = true;

  @Output()
  public bookEventEmiter: EventEmitter<Book> = new EventEmitter();

  constructor( protected formBuilder: FormBuilder ) {
    this.bookForm = this.formBuilder.group({
      id: [ ],
      name: [ ],
      isbn: [ ],
      author: [ ]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if( this.bookDetails ) {
      this.bookForm.controls.id.setValue( this.bookDetails.id );
      this.bookForm.controls.name.setValue( this.bookDetails.name );
      this.bookForm.controls.isbn.setValue( this.bookDetails.isbn );
      this.bookForm.controls.author.setValue( this.bookDetails.author.id );
      this.isEdit ? this.bookForm.enable() : this.bookForm.disable();
      this.bookForm.controls.id.disable();
    }
  }

  public onSubmit() {
    const formValues = this.bookForm.getRawValue();
    this.bookEventEmiter.next( formValues );
  }
}
