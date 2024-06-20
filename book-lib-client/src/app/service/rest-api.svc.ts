import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

    constructor(private http: HttpClient) { }
    
    protected httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    public get( url: string, urlParams?: any ) {
        url = config.apiBaseURL + url;
        if( urlParams ) {
            url = url + new URLSearchParams( urlParams ).toString();
        }
        return this.http.get( url );
    }
  
  public post(blog: any) {
    let url = "http://localhost:3000/blogs";
    return this.http.post(url, blog, this.httpOptions);
  }
}