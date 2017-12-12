import { QuestaoService } from './../../questao.service';
import { Component, OnInit } from '@angular/core';
import { Questao } from 'app/models/Questao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-todas-questoes',
  templateUrl: './listar-todas-questoes.component.html',
  styleUrls: ['./listar-todas-questoes.component.css']
})
export class ListarTodasQuestoesComponent implements OnInit {
  questoes: Questao[];
  constructor(private questaoService: QuestaoService, private route: Router) { }

  ngOnInit() {
      //this.questoes = this.questaoService.listar();
  }
  
  selectQuestao(questao: Questao) {
    this.route.navigate(['tela/responder']);
    }
}
