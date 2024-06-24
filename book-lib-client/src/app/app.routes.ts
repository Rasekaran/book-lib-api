import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';
import { BookDetailEditComponent } from './book-detail-edit/book-detail-edit.component';
import { BookDetailNewComponent } from './book-detail-new/book-detail-new.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailNewComponent } from './author-detail-new/author-detail-new.component';
import { AuthorDetailEditComponent } from './author-detail-edit/author-detail-edit.component';
import { AuthorDetailViewComponent } from './author-detail-view/author-detail-view.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'book/new', component: BookDetailNewComponent },
    { path: 'book/:id', component: BookDetailViewComponent },
    { path: 'book/:id/edit', component: BookDetailEditComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'author/new', component: AuthorDetailNewComponent },
    { path: 'author/:id', component: AuthorDetailViewComponent },
    { path: 'author/:id/edit', component: AuthorDetailEditComponent },
];
