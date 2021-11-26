import { TestBed } from '@angular/core/testing';

import { LoginRequestService } from './login-request.service';

describe('LoginRequestService', () => {
  let service: LoginRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
