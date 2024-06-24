import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RestAPIService } from '../service/rest-api.svc';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, Subscription, map, switchMap, tap } from 'rxjs';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnDestroy {

  public books: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  public totalNoOfBooks: BehaviorSubject<number> = new BehaviorSubject( 0 );

  public displayedColumns = [ 'id', 'name' ];

  protected subs: Subscription[] = [];

  public pageIndex: BehaviorSubject<number> = new BehaviorSubject( 0 );

  /**
   * No of items per page
   * Hard coded
   */
  public pageSize: number = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    protected apiService: RestAPIService,
    private router: Router ) {
    // this.books = new BehaviorSubject([] as Book[]);
    this.subs.push(
      this.pageIndex.pipe(
        switchMap( pageNo => this.apiService.getPaginated<Book>( 'books', { pageSize: this.pageSize, pageNo: pageNo })),
        tap( page => {
          this.totalNoOfBooks.next( page.totalItems );
          this.books.next( page.data );
        }
      )
    ).subscribe());
  }
  ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe() );
  }

  public viewBook( id: string ) {
    this.router.navigate(['book/', id]);
  }

  public create() {
    this.router.navigate([ 'book/new' ]);
  }

  public onPageChange( event: any ) {
    this.pageIndex.next( event.pageIndex );

  }
}
