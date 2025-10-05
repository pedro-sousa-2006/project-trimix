import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonItem, IonLabel, IonButton, IonCard } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { IonInput } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    MenuPage, IonFooter, RodapePage, IonList, IonItem, IonInput, IonLabel, IonButton, 
    IonCard]
})
export class AdicionarPage implements OnInit {

  constructor(private nav:NavController) { }
  voltar(){
    this.nav.navigateRoot("/tela-login");
  }
  confirmar(){
    this.nav.navigateBack("/home");
  }
  ngOnInit() {
  }

}
