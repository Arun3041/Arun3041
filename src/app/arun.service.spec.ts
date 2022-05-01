import { TestBed } from '@angular/core/testing';

import { ArunService } from './arun.service';

describe('ArunService', () => {
  let service: ArunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
