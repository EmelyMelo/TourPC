import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaDeVideoComponent } from './placa-de-video.component';

describe('PlacaDeVideoComponent', () => {
  let component: PlacaDeVideoComponent;
  let fixture: ComponentFixture<PlacaDeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaDeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaDeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
