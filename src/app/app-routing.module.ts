import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHospedagemComponent } from './cadastro-hospedagem/cadastro-hospedagem.component';
import { RestauranteHospedagemComponent } from './restaurante-hospedagem/restaurante-hospedagem.component';

const routes: Routes = [
  {path:"restaurante", component:RestauranteHospedagemComponent},
  {path:"cadastro", component:CadastroHospedagemComponent},
  {path:"", redirectTo:"restaurante", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
