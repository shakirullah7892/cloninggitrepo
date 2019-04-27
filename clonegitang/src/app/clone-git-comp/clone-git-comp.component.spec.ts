import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneGitCompComponent } from './clone-git-comp.component';

describe('CloneGitCompComponent', () => {
  let component: CloneGitCompComponent;
  let fixture: ComponentFixture<CloneGitCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneGitCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneGitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
