import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonInput, IonHeader, IonTitle, IonToolbar, IonLabel } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { } from "../../../node_modules/@ionic/angular/standalone/directives/input";

@Component({
  selector: 'app-entrargoogle',
  templateUrl: './entrargoogle.page.html',
  styleUrls: ['./entrargoogle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuPage, RodapePage, IonLabel, IonInput]
})
export class EntrargooglePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
