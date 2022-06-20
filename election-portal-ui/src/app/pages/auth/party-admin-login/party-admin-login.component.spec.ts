import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAdminLoginComponent } from './party-admin-login.component';

describe('PartyAdminLoginComponent', () => {
  let component: PartyAdminLoginComponent;
  let fixture: ComponentFixture<PartyAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyAdminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
