import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  
@Injectable() 
export class UserService {
constructor(private http: HttpClient) { 
  const url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
  const options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  
  function getUsers() {
        return this.http.get(url, options);
  } 
}