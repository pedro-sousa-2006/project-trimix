import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-open-app',
  templateUrl: './open-app.page.html',
  styleUrls: ['./open-app.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonImg, IonButton , RouterModule]
})
export class OpenAppPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
