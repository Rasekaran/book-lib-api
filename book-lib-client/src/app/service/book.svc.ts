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
}