import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdComponent } from './hd.component';

describe('HdComponent', () => {
  let component: HdComponent;
  let fixture: ComponentFixture<HdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
