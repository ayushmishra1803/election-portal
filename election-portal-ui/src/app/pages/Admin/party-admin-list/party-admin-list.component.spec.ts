import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyAdminListComponent } from './party-admin-list.component';

describe('PartyAdminListComponent', () => {
  let component: PartyAdminListComponent;
  let fixture: ComponentFixture<PartyAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
