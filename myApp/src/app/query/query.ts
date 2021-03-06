import { Injectable } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hoge } from '../model/models';
import { selectFeature, State } from '../store/hoge/store';

@Injectable({
  providedIn: 'root',
})
export class HogeQuery {
  constructor(private store$: Store<{}>) {}

  readonly hoge$: Observable<Hoge> = this.store$.pipe(
    select(
      createSelector(
        selectFeature,
        (state: State) => state.hoge,
      ),
    ),
  );
}
