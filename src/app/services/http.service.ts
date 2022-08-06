import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  post<TResponse>(url: string, body: any): Observable<TResponse>
  {
    return this.http.post<TResponse>(this.baseApiUrl+'/'+ url, body);
  }
  get<TResponse>(url: string): Observable<TResponse>
  {
    return this.http.get<TResponse>(this.baseApiUrl+'/'+ url);
  }

  
  
}
