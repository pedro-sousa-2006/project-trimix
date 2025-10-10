import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, 
  IonToolbar, 
  IonTitle,
   IonContent, 
   IonFooter, 
   IonCard,
    IonImg, 
    IonButton, 
    NavController } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {  RouterLink }
 from '@angular/router';
import { Trimixservices } from '../services/trimixservices';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
    IonToolbar,
    CommonModule,
    IonTitle, 
    RouterLink, 
    IonContent, 
    MenuPage, 
    IonFooter,
    RodapePage,
    IonCard
    , IonImg, 
    IonButton],
})
export class HomePage {
  nomecomponent : Array<string> = [];
  imagenscomponent :Array<string>= [];

  ngOnInit(){
  const dados = this.trimixservice.retorno();
  this.nomecomponent = dados.nomes;
  this.imagenscomponent = dados.imagens;
  }
  constructor(private navcontroll :NavController ,
     private trimixservice :Trimixservices
  ) {}
  verificar(){
    const getItem = localStorage;
    if(!getItem.length){
      this.navcontroll.navigateBack("/tela-login");
    }else{
      this.navcontroll.navigateBack("/adicionar")
    };
  }
  entrar(){
   let local = localStorage.length;
    if(local){
      this.navcontroll.navigateBack("/dia-semana");
    }else{
      this.navcontroll.navigateBack("//autenticacao-cliente");
    }
  }
}
