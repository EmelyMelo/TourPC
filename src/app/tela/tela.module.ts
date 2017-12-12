import { TabMenuModule, ButtonModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaComponent } from './tela.component';
import { PlacaMaeComponent } from './placa-mae/placa-mae.component';
import { PlacaDeVideoComponent } from './placa-de-video/placa-de-video.component';
import { TelaRoutingModule } from 'app/tela/tela.routing.module';
import { FonteComponent } from './fonte/fonte.component';
import { HdComponent } from './hd/hd.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { PlacaDeAudioComponent } from './placa-de-audio/placa-de-audio.component';
import { PlacaDeRedeComponent } from './placa-de-rede/placa-de-rede.component';
import { PortasComponent } from './portas/portas.component';
import { ProcessadorComponent } from './processador/processador.component';
import { ResponderComponent } from './responder/responder.component';

@NgModule({
    imports: [
        CommonModule, 
        TelaRoutingModule,
        TabMenuModule,
        ButtonModule,
        
    ],
    exports: [],
    declarations: [
        TelaComponent, 
        PlacaMaeComponent, 
        PlacaDeVideoComponent, 
        FonteComponent, 
        HdComponent, 
        MemoriaComponent, 
        PlacaDeAudioComponent, 
        PlacaDeRedeComponent, 
        PortasComponent, 
        ProcessadorComponent,
        ResponderComponent 
    ],
    providers: [],
})
export class TelaModule{
    
}