import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyMembersComponent } from './add-party-members.component';

describe('AddPartyMembersComponent', () => {
  let component: AddPartyMembersComponent;
  let fixture: ComponentFixture<AddPartyMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartyMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPartyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
