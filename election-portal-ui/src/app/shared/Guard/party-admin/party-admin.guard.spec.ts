import { TestBed } from '@angular/core/testing';

import { PartyAdminGuard } from './party-admin.guard';

describe('PartyAdminGuard', () => {
  let guard: PartyAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PartyAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
