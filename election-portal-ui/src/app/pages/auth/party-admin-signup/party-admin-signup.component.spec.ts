import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAdminSignupComponent } from './party-admin-signup.component';

describe('PartyAdminSignupComponent', () => {
  let component: PartyAdminSignupComponent;
  let fixture: ComponentFixture<PartyAdminSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyAdminSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyAdminSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
