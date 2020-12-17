import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-segundo-ano',
  templateUrl: './segundo-ano.component.html',
  styleUrls: ['./segundo-ano.component.css']
})
export class SegundoAnoComponent implements OnInit {

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
