import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/components/common/api";
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {
   user:String;
  items: MenuItem[];
    constructor(private route: ActivatedRoute,
        private router: Router, private usuarioService:UsuarioService){
            let usuarios = this.usuarioService.getUsuarios();
            let u = usuarios;
    }
    ngOnInit() {
        this.items = [
            //COLOCAR LOGO
        {label: 'Home', routerLink: ['/tela/home']},
        {label: 'Questões', routerLink: ['/tela/listar-todas-questoes']},        
        {label: 'Fonte', routerLink: ['/tela/fonte']},
        {label: 'HD', routerLink: ['/tela/hd']},
        {label: 'Memória', routerLink: ['/tela/memoria']},
        {label: 'Placa de áudio', routerLink: ['/tela/placa-de-audio']},
        {label: 'Placa de rede', routerLink: ['/tela/placa-de-rede']},
        {label: 'Placa de vídeo', routerLink: ['/tela/placa-de-video']},   
        {label: 'Placa mãe', routerLink: ['/tela/placa-mae']},
        {label: 'Portas', routerLink: ['/tela/portas']},
        {label: 'Processador', routerLink: ['/tela/processador']},


    ];
    this.user = this.route.snapshot.params['user'];
    
}      
}
