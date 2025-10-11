import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton, IonButtons, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonButton, IonButtons]
})
export class MenuPage implements OnInit {
local = localStorage.getItem("login");
  constructor(private navcontroll : NavController) { }
  remover(){
    localStorage.removeItem("login");
    this.navcontroll.navigateBack("/home");
  }

  ngOnInit() {
  }

}
