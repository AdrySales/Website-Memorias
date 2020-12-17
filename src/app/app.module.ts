import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { PrimeiroAnoComponent } from './primeiro-ano/primeiro-ano.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { SegundoAnoComponent } from './segundo-ano/segundo-ano.component';
import { TerceiroAnoComponent } from './terceiro-ano/terceiro-ano.component';
import { QuartoAnoComponent } from './quarto-ano/quarto-ano.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path : 'sobreNosC', component : SobreNosComponent},
  {path : 'quartoanoC', component : QuartoAnoComponent},
  {path : 'terceiroanoC', component : TerceiroAnoComponent},
  {path : 'segundoanoC', component : SegundoAnoComponent},
  {path : 'primeiroanoC', component : PrimeiroAnoComponent},
  {path : 'descricaoC', component : DescricaoComponent},
  {path : 'telainicialC', component : TelaInicialComponent},
  {path : 'telaprincipalC', component : TelaPrincipalComponent},

  {path: '', redirectTo: '/telainicialC', pathMatch: 'full'}
  
];
@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaPrincipalComponent,
    PrimeiroAnoComponent,
    DescricaoComponent,
    SegundoAnoComponent,
    TerceiroAnoComponent,
    QuartoAnoComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
