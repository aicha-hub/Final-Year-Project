import { TestBed } from '@angular/core/testing';

import { ModelePersonneMoraleService } from './modele-personne-morale.service';

describe('ModelePersonneMoraleService', () => {
  let service: ModelePersonneMoraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelePersonneMoraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
