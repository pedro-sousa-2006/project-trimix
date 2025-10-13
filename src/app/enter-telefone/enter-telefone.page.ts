import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enter-telefone',
  templateUrl: './enter-telefone.page.html',
  styleUrls: ['./enter-telefone.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule,
    IonButton, IonLabel, IonInput ,RouterModule
  ]
})
export class EnterTelefonePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() { }

  confirmar() {
    this.nav.navigateBack("/tabs/tab1");
  }
}
