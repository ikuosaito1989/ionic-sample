import { TestBed } from '@angular/core/testing';

import { HogeQuery } from './hoge-query';

describe('HogeQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: HogeQuery = TestBed.get(HogeQuery);
    expect(query).toBeTruthy();
  });
});
