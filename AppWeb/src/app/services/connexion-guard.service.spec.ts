import { TestBed } from '@angular/core/testing';

import { ConnexionGuardService } from './connexion-guard.service';

describe('ConnexionGuardService', () => {
  let service: ConnexionGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
