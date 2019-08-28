import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HogeStore {
  title: string;
  body: string;
  constructor() {}
}
