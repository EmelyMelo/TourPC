import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { UsuarioService } from '../usuario.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	usuarios: Usuario[];
	msgs: Message[];
	usuario: Usuario;
	constructor(private usuarioService: UsuarioService, private route: Router) {
		this.usuarios = [];
		this.msgs = [];
		this.usuario = {nome:"", username:"", senha:"", tipoDeUsuario:""};
	}
	ngOnInit() {
		//this.usuarios = this.usuarioService.getUsuarios();
	}
	entrar(usuario: Usuario) {
		let podePassar: boolean = false;
		podePassar = this.usuarioService.verificar(this.usuario);
		if (podePassar) {
			this.route.navigate(["tela"]);
		} else {
			this.showError();
		}
	}
	showError() {
		this.msgs = [];
		this.msgs.push({ severity: 'error', summary: 'Login inexistente', detail: 'Verifique o login e a senha ou cadastre-se!' });
	}
}