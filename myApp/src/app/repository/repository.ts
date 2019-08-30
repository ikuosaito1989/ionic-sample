import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  cache = null;
  constructor(private http: HttpClient) {}

  fetch<T>(url: string, isCache: boolean = false): Observable<T> {
    if (isCache && this.cache) {
      return of(this.cache);
    }
    return this.http.get<T>(url).pipe(tap((data) => (this.cache = data)));
  }
}
