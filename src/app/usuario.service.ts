import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/Usuario';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService { 
  private usuarioCollection: AngularFirestoreCollection<Usuario>; 
  private usuarios: Usuario[] = new Array<Usuario>();
  constructor(private route: Router, private servicoFirestore: AngularFirestore) {
    this.usuarioCollection = this.servicoFirestore.collection<Usuario>("Funcionar io");   
  }
  usuario: Usuario;
  getUsuarios(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.usuarioCollection.snapshotChanges().subscribe(result => {
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
 
  add(usuario: Usuario){
    this.usuarioCollection.add(usuario);
  }

  verificar(usuario:Usuario){
    let ehValido:boolean = false; 
    for(let i:number =0;i<this.usuarios.length;i++){
      if(this.usuarios[i].username == this.usuario.username && this.usuarios[i].senha == this.usuario.senha){
        ehValido = true;
      }
    }
    return ehValido;	
  }
  
  deletar(usuario): Promise<void> {
    return this.usuarioCollection.doc(usuario.id).delete();
  }
 
}
