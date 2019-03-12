import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThirdComponent } from './view-third.component';

describe('ViewThirdComponent', () => {
  let component: ViewThirdComponent;
  let fixture: ComponentFixture<ViewThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
