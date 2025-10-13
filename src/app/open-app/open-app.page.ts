import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRouterLink , IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import {  } from "../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-open-app',
  templateUrl: './open-app.page.html',
  styleUrls: ['./open-app.page.scss'],
  standalone: true,
  imports: [IonContent,
     IonHeader,
      IonTitle,
       IonToolbar,
        CommonModule,
         FormsModule, IonImg, IonButton,
          IonRouterLink , RouterModule]
})
export class OpenAppPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
