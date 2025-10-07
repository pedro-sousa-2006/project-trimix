import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.page.html',
  styleUrls: ['./lista-horarios.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,
    IonTitle, IonToolbar, CommonModule,
    FormsModule, MenuPage, IonFooter,
    RodapePage, IonCard, IonList,
    IonItem, IonButton , RouterLink]
})
export class ListaHorariosPage implements OnInit {
local = localStorage.length;

constructor() { }
nome = "";
marcado = true;
  ngOnInit() {
  }

}
