import { TestBed, inject } from '@angular/core/testing';

import { ObServiceService } from './ob-service.service';

describe('ObServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObServiceService]
    });
  });

  it('should be created', inject([ObServiceService], (service: ObServiceService) => {
    expect(service).toBeTruthy();
  }));
});
