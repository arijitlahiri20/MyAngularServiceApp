import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoArijitComponent } from './demo-arijit.component';

describe('DemoArijitComponent', () => {
  let component: DemoArijitComponent;
  let fixture: ComponentFixture<DemoArijitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoArijitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoArijitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
