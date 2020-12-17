import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  async rotaPrincipal(){
    this.router.navigate([ '/telaprincipalC']);
  }
  async rotaDescricao(){
    this.router.navigate([ '/descricaoC']);
  }
}
