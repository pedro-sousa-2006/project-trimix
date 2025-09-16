import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { NavController } from '@ionic/angular';
import { IonInput } from '@ionic/angular/standalone';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsModule, MenuPage, IonFooter, RodapePage, IonList, IonItem,
    IonLabel, IonButton, IonInput]
})
export class ClientePage implements OnInit {

  constructor(private nav : NavController) { }
voltar(){
this.nav.navigateRoot("/lista-horarios");
}
  ngOnInit() {
  }

}
