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

}