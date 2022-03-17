import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospedagemService } from '../hospedagem.service';
import { iHos } from '../iHos';
import {iAli} from '../iAli';

@Component({
  selector: 'app-restaurante-hospedagem',
  templateUrl: './restaurante-hospedagem.component.html',
  styleUrls: ['./restaurante-hospedagem.component.css']
})
export class RestauranteHospedagemComponent implements OnInit {
  aliModel: iAli = new iAli();
  alimentacao: any;
  hospedagem: any;
  dataagora = new Date().toISOString().substring(0, 10);
  nome: any;

  public isCheckedCafe: boolean | undefined;
  public isCheckedAlmoco: boolean | undefined;
  public isCheckedJanta: boolean | undefined;

  constructor(private HospedagemService: HospedagemService, private router: Router) { }

  async ngOnInit() {
    //await this.HospedagemService.obterAli().then(ali => { this.alimentacao = ali});
    await this.HospedagemService.obterAliByDate(this.dataagora).then(ali => { this.alimentacao = ali; console.log(ali)});
   console.log(this.dataagora);
    console.log(this.alimentacao);
  }

  getByName(data: any, nome: any){
    if(nome !== "" && nome !==null && nome!==undefined){
      console.log(nome)
    this.HospedagemService.obterAliByNome(data.value, nome).then(ali => { this.alimentacao = ali; console.log(ali)});
    }
    else if(data.value !== "" && data.value !== undefined)
    {
      console.log(data.value)
      this.HospedagemService.obterAliByDate(data.value).then(ali => { this.alimentacao = ali; console.log(ali)});
    }
    else{
      window.alert("Insira algum dado!")
    }

  }

  getByDate(data: any){
    this.HospedagemService.obterAliByDate(data.value).then(ali => { this.alimentacao = ali; console.log(ali)});
    console.log(data.value);
    console.log(this.alimentacao.results[0].data);
  }
  getByCafe(data: any){
    if(data.value !== ""){
    this.HospedagemService.obterAliByCafe(data.value, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }
    else{
      this.HospedagemService.obterAliByCafe(this.dataagora, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }

  }

  getByAlmoco(data: any){
    if(data.value !== ""){
    this.HospedagemService.obterAliByAlmoco(data.value, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }
    else{
      this.HospedagemService.obterAliByAlmoco(this.dataagora, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }

  }

  getByJanta(data: any){
    if(data.value !== ""){
    this.HospedagemService.obterAliByJanta(data.value, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }
    else{
      this.HospedagemService.obterAliByJanta(this.dataagora, true).then(ali => { this.alimentacao = ali; console.log(ali)});
    }

  }

  checkCafe(i: any){
    let vari = 0;
    this.aliModel = {alimentacaoId: this.alimentacao.results[i].alimentacaoId, nome: this.alimentacao.results[i].nome, apto: this.alimentacao.results[i].apto, nro: this.alimentacao.results[i].nro, data: this.alimentacao.results[i].data, cafe: vari, almoco: this.alimentacao.results[i].almoco, janta: this.alimentacao.results[i].janta}
    this.HospedagemService.editAli(this.aliModel).then(() => window.alert("Registro Alterado!"))
   }
  
   checkAlmoco(i: any){
    let vari = 0;
    this.aliModel = {alimentacaoId: this.alimentacao.results[i].alimentacaoId, nome: this.alimentacao.results[i].nome, apto: this.alimentacao.results[i].apto, nro: this.alimentacao.results[i].nro, data: this.alimentacao.results[i].data, cafe: this.alimentacao.results[i].cafe, almoco: vari, janta: this.alimentacao.results[i].janta}
    this.HospedagemService.editAli(this.aliModel).then(() => window.alert("Registro Alterado!"))
   }
  
   checkJanta(i: any){
    let vari = 0;
    this.aliModel = {alimentacaoId: this.alimentacao.results[i].alimentacaoId, nome: this.alimentacao.results[i].nome, apto: this.alimentacao.results[i].apto, nro: this.alimentacao.results[i].nro, data: this.alimentacao.results[i].data, cafe: this.alimentacao.results[i].cafe, almoco: this.alimentacao.results[i].almoco, janta: vari}
    this.HospedagemService.editAli(this.aliModel).then(() => window.alert("Registro Alterado!"))
   }

   converterLongDate(data: any) {
    let dataco = new Date(data).getUTCDate();
    let seconds = new Date(data).getSeconds();
    let min = new Date(data).getUTCMinutes();
    let hora = new Date(data).getUTCHours();
    let dia = new Date(data).getUTCDate();
    let mes = new Date(data).getUTCMonth() + 1;
    let ano = new Date(data).getFullYear();
    return (dia + "/" + mes + "/" + ano);
  }

  gotoCadastro()
  {
    this.router.navigate(['/cadastro'])
  }

}
