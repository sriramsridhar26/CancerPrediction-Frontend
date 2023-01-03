import { TestBed } from '@angular/core/testing';

import { ApicontrolService } from './apicontrol.service';

describe('ApicontrolService', () => {
  let service: ApicontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
