import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodasQuestoesComponent } from './listar-todas-questoes.component';

describe('ListarTodasQuestoesComponent', () => {
  let component: ListarTodasQuestoesComponent;
  let fixture: ComponentFixture<ListarTodasQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTodasQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodasQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
