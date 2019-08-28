import { TestBed } from '@angular/core/testing';

import { HogeRepository } from './hoge-repository';

describe('HogeRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const repository: HogeRepository = TestBed.get(HogeRepository);
    expect(repository).toBeTruthy();
  });
});
