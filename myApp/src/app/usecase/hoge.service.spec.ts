import { TestBed } from '@angular/core/testing';

import { HogeService } from './hoge.service';

describe('HogeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HogeService = TestBed.get(HogeService);
    expect(service).toBeTruthy();
  });
});
