import { TestBed } from '@angular/core/testing';

import { Trimixservices } from './trimixservices';

describe('Trimixservices', () => {
  let service: Trimixservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trimixservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
