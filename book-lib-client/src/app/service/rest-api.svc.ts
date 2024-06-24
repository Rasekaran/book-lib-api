import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { config } from '../app.config';
import { Observable } from 'rxjs';

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
  
  public post( url: string, data: any ): Observable<any> {
    url = config.apiBaseURL + url;
    return this.http.post( url, data, this.httpOptions );
  }

  public put( url: string, data: any ) {
    url = config.apiBaseURL + url;
    return this.http.put( url, data );
  }
}