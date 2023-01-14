import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationImageComponent } from './user-information-image.component';

describe('UserInformationImageComponent', () => {
  let component: UserInformationImageComponent;
  let fixture: ComponentFixture<UserInformationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
