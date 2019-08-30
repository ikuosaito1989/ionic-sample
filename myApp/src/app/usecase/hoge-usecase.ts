import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Repository } from '../repository/repository';
import * as HogeStore from '../store/hoge/store';

@Injectable({
  providedIn: 'root',
})
export class HogeUsecase {
  constructor(private store$: Store<{}>, private repo: Repository) {}

  async init() {
    const hoge = await this.repo.fetchHoge().toPromise();
    this.store$.dispatch(HogeStore.setHoge({ hoge: hoge }));
  }

  async reset() {
    this.store$.dispatch(HogeStore.resetHoge());
  }
}
