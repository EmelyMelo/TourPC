import { ListarQuestoesComponent } from './listar-questoes/listar-questoes.component';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { TelaComponent } from './tela/tela.component';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';


const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tela/:user', component: TelaComponent},
    {path: 'questoes', component: ListarQuestoesComponent},
    {path: 'cadastro', component: CadastroComponent}, 
    {path: 'inicio', component: TelaComponent},
    {path: 'inserir-questao', component: InserirQuestaoComponent} 

    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
