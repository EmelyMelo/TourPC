import { FirebaseConfig } from './../environments/firebase.config';
import { QuestaoService } from './questao.service';
import { TelaModule } from './tela/tela.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
//TELAS+ROTAS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { ListarQuestoesComponent } from './listar-questoes/listar-questoes.component';

//PRIME NG
import { AccordionModule, ChipsModule } from 'primeng/primeng';     
import { ContextMenuModule, ButtonModule, TabMenuModule, MenubarModule } from 'primeng/primeng';
import { MenuItem} from "primeng/components/common/api";
import { PasswordModule } from 'primeng/primeng';
import { InputTextModule } from "primeng/components/inputtext/inputtext";
import { RadioButtonModule, SlideMenuModule, GrowlModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { UsuarioService } from './usuario.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { DialogModule } from 'primeng/components/dialog/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListarTodasQuestoesComponent } from 'app/tela/listar-todas-questoes/listar-todas-questoes.component';
import { BancoFirebaseComponent } from './banco-firebase/banco-firebase.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InserirQuestaoComponent,
    CadastroComponent,
    ListarQuestoesComponent,
    ListarTodasQuestoesComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    FormsModule,
    routing, 
    AccordionModule,
    ButtonModule, 
    TabMenuModule,
    PasswordModule,
    ChipsModule,
    InputTextModule,
    ContextMenuModule,
    MenubarModule,
    RadioButtonModule,
    SlideMenuModule, 
    TelaModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    InputTextareaModule,
    ListboxModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule.enablePersistence(),
   ],
  providers: [UsuarioService, QuestaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
