import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  {path : 'telainicialC', component : TelaInicialComponent},
  {path : 'telaprincipalC', component : TelaPrincipalComponent},
  {path : 'descricaoC', component : DescricaoComponent},
  {path: '', redirectTo: '/telainicialC', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
