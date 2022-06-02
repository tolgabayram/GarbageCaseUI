import { TestBed } from '@angular/core/testing';

import { GarbagerecordApiService } from './garbagerecord-api.service';

describe('GarbagerecordApiService', () => {
  let service: GarbagerecordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarbagerecordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
