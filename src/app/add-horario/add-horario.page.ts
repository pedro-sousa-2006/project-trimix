import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { IonInput } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-horario',
  templateUrl: './add-horario.page.html',
  styleUrls: ['./add-horario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    MenuPage, RodapePage, IonFooter, IonCard, IonItem, IonLabel, IonButton, IonInput,IonInput]
})
export class AddHorarioPage implements OnInit {

  constructor(private navcontroll : NavController) { }
voltar(){
  this.navcontroll.navigateRoot("/lista-horarios");
}
dia = "";
desabilitar = true;
hora = "";
listahorarios(){
  if(this.dia.length > 0|| this.hora.length > 0){
    this.desabilitar = true;
  }else{
    this.desabilitar = false;
      this.navcontroll.
      navigateRoot("/lista-horarios");

  }
}
  ngOnInit() {
  }

}
