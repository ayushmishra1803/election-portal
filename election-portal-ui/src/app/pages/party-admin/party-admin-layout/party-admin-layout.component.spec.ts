import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAdminLayoutComponent } from './party-admin-layout.component';

describe('PartyAdminLayoutComponent', () => {
  let component: PartyAdminLayoutComponent;
  let fixture: ComponentFixture<PartyAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyAdminLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
