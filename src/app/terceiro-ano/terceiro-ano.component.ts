import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-terceiro-ano',
  templateUrl: './terceiro-ano.component.html',
  styleUrls: ['./terceiro-ano.component.css']
})
export class TerceiroAnoComponent implements OnInit {

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
