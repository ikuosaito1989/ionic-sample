import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

export const noop = <T>() => (obs: Observable<T>): Observable<T> => {
  return obs;
};

@Injectable({
  providedIn: 'root',
})
export class Repository {
  constructor(private http: HttpClient) {}

  get<T>(url: string, enableRetry: boolean = false): Observable<T> {
    return this.http.get<T>(url).pipe(enableRetry ? retry(3) : noop());
  }
}
