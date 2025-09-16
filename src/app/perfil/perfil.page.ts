import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, MenuPage, IonFooter, RodapePage, IonCard, IonItem, 
    IonLabel,  IonButton]
})
export class PerfilPage implements OnInit {

  constructor(private nav :NavController) { }
nome = "";
  ngOnInit() {
  }
  voltar(){
    this.nav.navigateRoot("lista-horarios");
  }

}
