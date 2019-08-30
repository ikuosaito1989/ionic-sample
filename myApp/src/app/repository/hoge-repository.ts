import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoge } from '../model/models';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class HogeRepository {
  constructor(private repository: Repository) {}

  fetchHoge(): Observable<Hoge> {
    return this.repository.fetch(`http://localhost:3000/api/video/teachers/search/test`);
  }
}
