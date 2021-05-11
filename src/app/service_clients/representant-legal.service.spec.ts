import { TestBed } from '@angular/core/testing';

import { RepresentantLegalService } from './representant-legal.service';

describe('RepresentantLegalService', () => {
  let service: RepresentantLegalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentantLegalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
