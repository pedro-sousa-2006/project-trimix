import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonHeader,
   IonTitle, IonToolbar, IonLabel,
    IonButton ,NavController
  } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {  } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-entrartelefone',
  templateUrl: './entrartelefone.page.html',
  styleUrls: ['./entrartelefone.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule,
     FormsModule, MenuPage, RodapePage,
      IonLabel, IonInput, IonButton 
    ,RouterModule]
})
export class EntrartelefonePage implements OnInit {

  constructor(private navcontroll :NavController) { }

  nome = "";
  telefone = "";
  sobrenome = "";
  resposta = "";
  entrar(){
    if(!this.nome){
      this.resposta = "O nome é obrigatório!";
    }else if(!this.sobrenome){
      this.resposta = "O sobrenome é obrigatório!"
    }else if(!this.telefone){
      this.resposta = "O telefone é obrigatório!";
    }
    else{
      this.navcontroll.navigateBack("/home")
    }
  }
  input(){
    this.resposta = "";
  }
  ngOnInit() {
  }

}
