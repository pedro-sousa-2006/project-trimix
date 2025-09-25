import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ida-semana',
  templateUrl: './ida-semana.page.html',
  styleUrls: ['./ida-semana.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IdaSemanaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
