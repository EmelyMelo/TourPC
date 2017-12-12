import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraInterfaceComponent } from './login.component';

describe('PrimeiraInterfaceComponent', () => {
  let component: PrimeiraInterfaceComponent;
  let fixture: ComponentFixture<PrimeiraInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
