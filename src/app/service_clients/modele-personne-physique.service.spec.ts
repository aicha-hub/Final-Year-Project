import { TestBed } from '@angular/core/testing';

import { ModelePersonnePhysiqueService } from './modele-personne-physique.service';

describe('ModelePersonnePhysiqueService', () => {
  let service: ModelePersonnePhysiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelePersonnePhysiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
