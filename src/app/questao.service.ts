import { Questao } from './models/Questao';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestaoService {
  private questaoCollection: AngularFirestoreCollection<Questao>; 
  questoes: Questao[] = new Array<Questao>();
  questao: Questao;

  constructor(private route: Router, private servicoFirestore: AngularFirestore) {
    this.questaoCollection = this.servicoFirestore.collection<Questao>("Funcionar io");       
    let q1; 
    q1.assunto = "fonte";
    q1.enunciado = "bla";
    q1.id = 1;
    let q2; 
    q2.assunto = "hd";
    q2.enunciado = "ble";
    q2.id = 2;
    this.questaoCollection.add(q1);
    this.questaoCollection.add(q2);
  }

  adicionar(questao:Questao){
    this.questaoCollection.add(questao);
    this.questao.id ++;    
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
