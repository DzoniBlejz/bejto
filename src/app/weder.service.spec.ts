import { TestBed } from '@angular/core/testing';

import { WederService } from './weder.service';

describe('WederService', () => {
  let service: WederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
