import { TestBed } from '@angular/core/testing';

import { HogeUsecase } from './hoge-usecase';

describe('HogeUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const usecase: HogeUsecase = TestBed.get(HogeUsecase);
    expect(usecase).toBeTruthy();
  });
});
