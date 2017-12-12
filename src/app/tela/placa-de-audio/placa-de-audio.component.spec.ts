import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaDeAudioComponent } from './placa-de-audio.component';

describe('PlacaDeAudioComponent', () => {
  let component: PlacaDeAudioComponent;
  let fixture: ComponentFixture<PlacaDeAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaDeAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaDeAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
