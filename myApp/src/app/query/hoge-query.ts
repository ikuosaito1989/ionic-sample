import { Injectable } from '@angular/core';
import { HogeStore } from '../store/hoge-store';

// Query is readonly
@Injectable({
  providedIn: 'root',
})
export class HogeQuery extends HogeStore {
  // You can also use in-class variables
  // hoge: string;

  get hoge(): string {
    return `${this.title} ${this.body}`;
  }

  constructor() {
    // call parent class
    super();
  }
}
