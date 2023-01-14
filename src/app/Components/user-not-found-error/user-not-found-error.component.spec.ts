import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotFoundErrorComponent } from './user-not-found-error.component';

describe('UserNotFoundErrorComponent', () => {
  let component: UserNotFoundErrorComponent;
  let fixture: ComponentFixture<UserNotFoundErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotFoundErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNotFoundErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
