import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  cache = null;
  constructor(private http: HttpClient) {}

  get<T>(url: string, enableRetry: boolean = false): Observable<T> {
    return this.http.get<T>(url).pipe(enableRetry ? retry(3) : retry(0));
  }
}
