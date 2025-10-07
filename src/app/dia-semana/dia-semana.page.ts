import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonCard, IonItem, IonLabel, IonButton, IonFooter, IonList } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dia-semana',
  templateUrl: './dia-semana.page.html',
  styleUrls: ['./dia-semana.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, 
    FormsModule, MenuPage, IonCard, 
    IonItem, IonLabel, IonInput, RouterModule ,
    IonButton, IonFooter, RodapePage, 
    IonList]
})
export class DiaSemanaPage implements OnInit {
local = localStorage.length;
  constructor() { }

  ngOnInit() {
  }

}
