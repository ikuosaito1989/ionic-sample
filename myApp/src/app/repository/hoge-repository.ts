import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hoge } from '../model/models';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class HogeRepository {
  constructor(private repository: Repository) {}

  fetchHoge(): Observable<Hoge> {
    const result: Hoge = { title: 'test', body: 'test1' };
    return of(result);
    // return this.repository.get(`http://localhost:3000/api/video/teachers/search/testa`);
  }
}
