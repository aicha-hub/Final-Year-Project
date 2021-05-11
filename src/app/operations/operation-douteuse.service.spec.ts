import { TestBed } from '@angular/core/testing';

import { OperationDouteuseService } from './operation-douteuse.service';

describe('OperationDouteuseService', () => {
  let service: OperationDouteuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationDouteuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
