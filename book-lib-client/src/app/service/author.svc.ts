import { Injectable } from "@angular/core";
import { RestAPIService } from "./rest-api.svc";
import { Observable } from "rxjs";
import { Author } from "../model/author";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    constructor( public restAPIService: RestAPIService ) {}

    public getAuthors(): Observable<Author[]> {
        return this.restAPIService.get( 'authors' ) as Observable<Author[]>;
    }

    public getAuthorDetails(id: number): Observable<Author> {
        return this.restAPIService.get( 'author/'+ id ) as Observable<Author>;
    }

    public updateAuthor( author: Author ) {
        return this.restAPIService.put( 'author/' + author.id, author );
    }

    public createAuthor( author: Author ): Observable<Author> {
        return this.restAPIService.post( 'auhort', author );
    }
}