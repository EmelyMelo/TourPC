import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortasComponent } from './portas.component';

describe('PortasComponent', () => {
  let component: PortasComponent;
  let fixture: ComponentFixture<PortasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
