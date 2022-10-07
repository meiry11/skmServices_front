import { TestBed } from '@angular/core/testing';

import { CatalogueproduitService } from './catalogueproduit-service.service';

describe('CatalogueproduitServiceService', () => {
  let service: CatalogueproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
