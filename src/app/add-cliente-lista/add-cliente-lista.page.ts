import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonHeader, IonTitle, IonToolbar, IonCard, IonItem, IonLabel, IonButton, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {  } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-cliente-lista',
  templateUrl: './add-cliente-lista.page.html',
  styleUrls: ['./add-cliente-lista.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuPage, RodapePage, IonCard, IonItem, IonLabel, IonInput, IonButton, IonCardHeader, IonCardContent, IonCardTitle]
})
export class AddClienteListaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
