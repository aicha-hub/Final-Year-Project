import { TestBed } from '@angular/core/testing';

import { CompteCourantService } from './compte-courant.service';

describe('CompteCourantService', () => {
  let service: CompteCourantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteCourantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
