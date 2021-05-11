import { TestBed } from '@angular/core/testing';

import { PersNatService } from './pers-nat.service';

describe('PersNatService', () => {
  let service: PersNatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersNatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
