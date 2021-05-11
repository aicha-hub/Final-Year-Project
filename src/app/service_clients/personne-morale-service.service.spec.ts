import { TestBed } from '@angular/core/testing';

import { PersonneMoraleServiceService } from './personne-morale-service.service';

describe('PersonneMoraleServiceService', () => {
  let service: PersonneMoraleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneMoraleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
