import { TestBed } from '@angular/core/testing';

import { LignecommandeService } from './lignecommande-service.service';

describe('LignecommandeServiceService', () => {
  let service: LignecommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignecommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
