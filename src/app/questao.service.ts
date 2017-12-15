import { Questao } from './models/Questao';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestaoService {
  private questaoCollection: AngularFirestoreCollection<Questao>; 
  questoes: Questao[] = new Array<Questao>();bv
  questao: Questao;

  constructor(private route: Router, private servicoFirestore: AngularFirestore) {
    this.questaoCollection = this.servicoFirestore.collection<Questao>("Funcionar io");       
    let q1:Questao = {assunto: "fonte", enunciado:"cnco é top", respostaCerta: "1"};
    let q2:Questao = {assunto:"hd", enunciado:"é top sim", respostaCerta: "1"};
    this.questaoCollection.add(q1);
    this.questaoCollection.add(q2);
  }

  adicionar(questao:Questao){
    this.questaoCollection.add(questao);    
  }

  listar(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.questaoCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });
    return meuObservable;
  }
 
  apagar(questao): Promise<void> {
    return this.questaoCollection.doc(questao.id).delete();
  }
}
