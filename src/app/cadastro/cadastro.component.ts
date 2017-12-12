import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import { Router, ActivatedRoute } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  user: Usuario;
  constructor(private usuarioService: UsuarioService,  private route: Router, private rotaAtiva: ActivatedRoute) {
    this.user = this.rotaAtiva.snapshot.params['user'];
    this.usuario = {nome:"", username:"", senha:"", tipoDeUsuario:""};   
   }

  ngOnInit() {

  }
  salvar(usuario: Usuario){
    this.usuarioService.add(this.usuario);
    this.route.navigate(['login']);
  }
  }
 
