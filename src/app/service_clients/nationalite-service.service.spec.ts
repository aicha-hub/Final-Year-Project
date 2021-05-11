import { TestBed } from '@angular/core/testing';

import { NationaliteServiceService } from './nationalite-service.service';

describe('NationaliteServiceService', () => {
  let service: NationaliteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationaliteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
