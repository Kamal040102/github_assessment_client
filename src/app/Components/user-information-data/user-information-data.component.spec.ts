import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationDataComponent } from './user-information-data.component';

describe('UserInformationDataComponent', () => {
  let component: UserInformationDataComponent;
  let fixture: ComponentFixture<UserInformationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
