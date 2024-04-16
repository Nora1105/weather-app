import { TestBed } from '@angular/core/testing';

import { LoactionServiceService } from './loaction-service.service';

describe('LoactionServiceService', () => {
  let service: LoactionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoactionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
