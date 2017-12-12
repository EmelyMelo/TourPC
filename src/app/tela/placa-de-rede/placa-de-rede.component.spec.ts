import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaDeRedeComponent } from './placa-de-rede.component';

describe('PlacaDeRedeComponent', () => {
  let component: PlacaDeRedeComponent;
  let fixture: ComponentFixture<PlacaDeRedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaDeRedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaDeRedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
