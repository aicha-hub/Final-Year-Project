import { TestBed } from '@angular/core/testing';

import { PepServiceService } from './pep-service.service';

describe('PepServiceService', () => {
  let service: PepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
