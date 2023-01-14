import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryBadgeComponent } from './primary-badge.component';

describe('PrimaryBadgeComponent', () => {
  let component: PrimaryBadgeComponent;
  let fixture: ComponentFixture<PrimaryBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
