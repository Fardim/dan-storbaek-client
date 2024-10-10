import { TestBed } from '@angular/core/testing';

import { BinaryStringService } from './binary-string.service';

describe('BinaryStringService', () => {
  let service: BinaryStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinaryStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
