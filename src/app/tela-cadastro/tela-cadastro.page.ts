import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonToolbar, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {  } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.page.html',
  styleUrls: ['./tela-cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, MenuPage, RodapePage,
    IonInput, IonItem, IonList, IonLabel, IonButton , RouterModule]
})
export class TelaCadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
