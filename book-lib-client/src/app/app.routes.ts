import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
];
