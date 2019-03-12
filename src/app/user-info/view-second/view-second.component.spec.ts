import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecondComponent } from './view-second.component';

describe('ViewSecondComponent', () => {
  let component: ViewSecondComponent;
  let fixture: ComponentFixture<ViewSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
