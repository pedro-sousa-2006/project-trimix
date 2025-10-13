import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput,IonContent,
   IonHeader, IonTitle, IonToolbar,
    IonMenu, IonButton, IonLabel
  ,IonRouterLink } from '@ionic/angular/standalone';
import {  } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { } from "../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enter-conta',
  templateUrl: './enter-conta.page.html',
  styleUrls: ['./enter-conta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,
     IonTitle, IonToolbar,
      CommonModule, FormsModule,
       IonMenu, IonButton, IonLabel,
        IonInput, IonRouterLink
      ,RouterModule]
})
export class EnterContaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
entrar(){

}
}
