import { Injectable } from '@angular/core';
import { HogeStore } from '../store/hoge-store';

@Injectable({
  providedIn: 'root',
})
export class HogeQuery extends HogeStore {
  hoge: string;
}
