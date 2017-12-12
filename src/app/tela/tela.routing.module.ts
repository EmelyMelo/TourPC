import { TelaComponent } from './tela.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { ProcessadorComponent } from './processador/processador.component';
import { PortasComponent } from './portas/portas.component';
import { PlacaMaeComponent } from './placa-mae/placa-mae.component';
import { PlacaDeVideoComponent } from './placa-de-video/placa-de-video.component';
import { PlacaDeRedeComponent } from './placa-de-rede/placa-de-rede.component';
import { PlacaDeAudioComponent } from './placa-de-audio/placa-de-audio.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { HdComponent } from './hd/hd.component';
import { FonteComponent } from './fonte/fonte.component';
import { ListarTodasQuestoesComponent } from 'app/tela/listar-todas-questoes/listar-todas-questoes.component';
import { ResponderComponent } from 'app/tela/responder/responder.component';

const telasRoutes = [
    {path: 'tela', component: TelaComponent, children: [     
        {path: 'fonte', component: FonteComponent},
        {path: 'hd', component: HdComponent},
        {path: 'memoria', component: MemoriaComponent},
        {path: 'placa-de-audio', component: PlacaDeAudioComponent},
        {path: 'placa-de-rede', component: PlacaDeRedeComponent},
        {path: 'placa-de-video', component: PlacaDeVideoComponent},
        {path: 'placa-mae', component: PlacaMaeComponent},
        {path: 'portas', component: PortasComponent},
        {path: 'processador', component: ProcessadorComponent},
        {path: 'listar-todas-questoes', component: ListarTodasQuestoesComponent},
        {path: 'responder', component: ResponderComponent}
    ]},
    


];

@NgModule({
    imports: [
        RouterModule.forChild(telasRoutes)
    ],
    exports: [RouterModule]

})
export class TelaRoutingModule{

}