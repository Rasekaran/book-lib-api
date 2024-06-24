import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';
import { BookDetailEditComponent } from './book-detail-edit/book-detail-edit.component';
import { BookDetailNewComponent } from './book-detail-new/book-detail-new.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'book/new', component: BookDetailNewComponent },
    { path: 'book/:id', component: BookDetailViewComponent },
    { path: 'book/:id/edit', component: BookDetailEditComponent },
];
