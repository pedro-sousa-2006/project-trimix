import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonIcon, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import {  } from "../../../node_modules/@ionic/angular/standalone/directives/icon";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.page.html',
  styleUrls: ['./gerenciar-usuarios.page.scss'],
  standalone: true,
  imports: [IonContent,
     IonHeader,
      IonTitle,
       IonToolbar,
        CommonModule,
         FormsModule, MenuPage, 
         RodapePage, IonButton, 
         IonList, IonItem, IonIcon
        ,RouterModule, RouterLink]
})
export class GerenciarUsuariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  remover(){
    
  }

}
