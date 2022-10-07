import { TestBed } from '@angular/core/testing';

import { ProduitGrosService } from './produit-gros-service.service';

describe('ProduitGrosServiceService', () => {
  let service: ProduitGrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitGrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
