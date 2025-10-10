import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonItem, IonLabel,
   IonButton, IonCard } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { IonInput } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Trimixservices } from '../services/trimixservices';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    MenuPage, IonFooter, RodapePage, IonList, IonItem, IonInput, IonLabel, IonButton, 
    IonCard , RouterModule]
})
export class AdicionarPage implements OnInit {
  nome = "";
  imagem = "";

  constructor(private nav:NavController
    ,private trimixsercice :Trimixservices
  ) { }

  voltar(){
    this.nav.navigateRoot("/tela-login");
  }
  confirmar(){
    this.trimixsercice.adicionarlista(this.imagem , this.nome);
    this.nav.navigateBack("/home");
  }
  ngOnInit() {
  }

}
