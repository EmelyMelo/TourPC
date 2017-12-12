import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirQuestaoComponent } from './inserir-questao.component';

describe('InserirQuestaoComponent', () => {
  let component: InserirQuestaoComponent;
  let fixture: ComponentFixture<InserirQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
