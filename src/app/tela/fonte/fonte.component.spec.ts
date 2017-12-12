import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonteComponent } from './fonte.component';

describe('FonteComponent', () => {
  let component: FonteComponent;
  let fixture: ComponentFixture<FonteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
