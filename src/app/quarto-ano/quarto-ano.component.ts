import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-quarto-ano',
  templateUrl: './quarto-ano.component.html',
  styleUrls: ['./quarto-ano.component.css']
})
export class QuartoAnoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  linkUm(){
    this.router.navigate([ '/primeiroanoC']);
  }
  linkDois(){
    this.router.navigate([ '/segundoanoC']);
  }
  linkTreis(){
    this.router.navigate([ '/terceiroanoC']);
  }
  linkQuatro(){
    this.router.navigate([ '/quartoanoC']);
  }
  linkIntegrantes(){
    this.router.navigate([ '/telaprincipalC']);
  }
  linkSobreNos(){
    this.router.navigate([ '/sobreNosC']);
  }
}
