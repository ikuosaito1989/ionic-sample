import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoge } from '../domain/models';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  constructor(private http: HttpClient) {}

  fetchHoge(): Observable<Hoge> {
    return this.http.get<Hoge>(`http://localhost:3000/api/video/teachers/search/test`);
  }
}
