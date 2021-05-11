import { TestBed } from '@angular/core/testing';

import { BeneficiaireEffectifServiceService } from './beneficiaire-effectif-service.service';

describe('BeneficiaireEffectifServiceService', () => {
  let service: BeneficiaireEffectifServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiaireEffectifServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
