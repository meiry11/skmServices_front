import { TestBed } from '@angular/core/testing';

import { CatalogueemballageService } from './catalogueemballage-service.service';

describe('CatalogueemballageService', () => {
  let service: CatalogueemballageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueemballageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
