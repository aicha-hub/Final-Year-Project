import { TestBed } from '@angular/core/testing';

import { ParenteService } from './parente.service';

describe('ParenteService', () => {
  let service: ParenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
