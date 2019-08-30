import { Injectable } from '@angular/core';
import { HogeStore } from '../store/hoge-store';

@Injectable({
  providedIn: 'root',
})
export class HogeUsecase {
  constructor(private hogeStore: HogeStore) {}
  setTitle(title: string) {
    this.hogeStore.title = title;
  }
}
