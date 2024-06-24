import { Injectable } from "@angular/core";
import { RestAPIService } from "./rest-api.svc";
import { Observable } from "rxjs";
import { Book } from "../model/book";

@Injectable({
    providedIn: 'root'
})
export class BookService{
    
    constructor( public restAPIService: RestAPIService ) {}

    public getBookDetails( id: number ): Observable<Book> {
        return this.restAPIService.get( 'book/' + id ) as Observable<Book>
    }

    public updateBook( book: Book ) {
        return this.restAPIService.put( 'book/' + book.id, book );
    }

    public createBook(book: Book): Observable<Book> {
        return this.restAPIService.post( 'book', book );
    }
}