import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-processador',
  templateUrl: './processador.component.html',
  styleUrls: ['./processador.component.css']
})
export class ProcessadorComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

}
