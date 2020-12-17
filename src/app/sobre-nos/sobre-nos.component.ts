import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

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
