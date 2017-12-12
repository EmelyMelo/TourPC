import { SelectItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Questao } from 'app/models/Questao';
import { QuestaoService } from 'app/questao.service';

@Component({
  selector: 'app-listar-questoes',
  templateUrl: './listar-questoes.component.html',
  styleUrls: ['./listar-questoes.component.css']
})
export class ListarQuestoesComponent implements OnInit {
  questoes: Questao[];
  displayDialog: boolean;
  questao: Questao;
  questaoSelecionada: Questao;  
  novaQuestao: boolean;

  constructor(private questaoService: QuestaoService) { }

  ngOnInit() { 
    //this.questoes = this.questaoService.listar();
  }
  showDialogToAdd() {
    this.novaQuestao = true;
    this.questao;
    this.displayDialog = true;
  }
  salvar() {
    let questoes = [... this.questoes];
    if (this.novaQuestao)
      questoes.push(this.questao);
    else
        questoes[this.encontrarQuestaoSelecionadaIndex()] = this.questao;
    
    this.questoes = questoes;
    this.questao = null;
    this.displayDialog = false;
    this.questaoService.questoes = this.questoes;
  }
  
  deletar() {
    //let id = this.encontrarQuestaoSelecionadaIndex();
    let questoesTemp = this.questoes.slice(0);
    let index = 0;
    questoesTemp.map(elemento => { 
      if(elemento.id == this.questao.id){
        questoesTemp.splice(index, 1);
      }
      index++;
    });
    this.questoes = questoesTemp;
    this.questao = null;
    this.displayDialog = false;
    this.questaoService.questoes = this.questoes;
  }
  visualizarDetalhesQuestao(event) {
    this.novaQuestao = false;
    this.questao = this.cloneQuestao(event.data);
    
    this.displayDialog = true;
  
    
  }
  cloneQuestao(questao: Questao): Questao {
    let quest;
    for (let prop in questao) {
      quest[prop] = questao[prop];
    }
    return quest;
  }
  encontrarQuestaoSelecionadaIndex(): number {
    return this.questoes.indexOf(this.questaoSelecionada);
  }
}

