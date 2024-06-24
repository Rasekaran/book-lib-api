import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'book/:id', component: BookDetailViewComponent }
];
