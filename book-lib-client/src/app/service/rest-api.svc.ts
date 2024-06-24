import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { config } from '../app.config';
import { Observable, map } from 'rxjs';

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

    public getPaginated<T>( url: string, urlParams?: any ): Observable<{totalItems: number, data: T[] }> {
        url = config.apiBaseURL + url;
        if( urlParams ) {
            url = url + "?" + new URLSearchParams( urlParams ).toString();
        }

        return this.http.get<T[]>( url, { observe: 'response' }).pipe(
            map((response: HttpResponse<T[]>) => {
              const totalElements = Number(response.headers.get('X-Total-Count'));
              return { totalItems: totalElements, data: response.body || [] };
            })
        );
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