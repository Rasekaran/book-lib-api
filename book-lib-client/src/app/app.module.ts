import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';  // If your appConfig provides HttpClient
import { RouterModule, provideRouter } from '@angular/router';           // If your appConfig provides routing
import { appRoutes } from './app.routes';                  // If your appConfig provides routes
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
    // Add other components, directives, pipes here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    CommonModule
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