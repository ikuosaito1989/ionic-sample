import { TestBed } from '@angular/core/testing';

import { HogeStore } from './hoge-store';

describe('HogeStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const store: HogeStore = TestBed.get(HogeStore);
    expect(store).toBeTruthy();
  });
});
