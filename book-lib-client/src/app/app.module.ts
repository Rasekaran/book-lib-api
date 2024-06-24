import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';  // If your appConfig provides HttpClient
import { RouterModule, provideRouter } from '@angular/router';           // If your appConfig provides routing
import { appRoutes } from './app.routes';                  // If your appConfig provides routes
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent
    // Add other components, directives, pipes here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    BrowserAnimationsModule,// why
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
    // Import other modules here
  ],
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes)
    // Add other providers from appConfig here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }