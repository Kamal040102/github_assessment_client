import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoSectionComponent } from './repo-section.component';

describe('RepoSectionComponent', () => {
  let component: RepoSectionComponent;
  let fixture: ComponentFixture<RepoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
