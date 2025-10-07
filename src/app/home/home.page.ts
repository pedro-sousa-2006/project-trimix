import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard, IonImg, IonButton, NavController } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { Route, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle,RouterLink, IonContent, MenuPage, IonFooter,
     RodapePage,
     IonCard, IonImg, IonButton],
})
export class HomePage {
  constructor(private navcontroll :NavController) {}
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
