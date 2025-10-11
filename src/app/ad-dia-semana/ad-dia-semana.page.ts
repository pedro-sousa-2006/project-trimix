import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonInput,
   IonTitle, IonToolbar, IonCard, 
   IonItem, IonLabel, IonButton,
    IonFooter } from '@ionic/angular/standalone';
import { } from "../../../node_modules/@ionic/angular/standalone/directives/input";
import { RodapePage } from "../rodape/rodape.page";
import { MenuPage } from "../menu/menu.page";
import { Router } from '@angular/router';
import { Trimixservices } from '../services/trimixservices';

@Component({
  selector: 'app-ad-dia-semana',
  templateUrl: './ad-dia-semana.page.html',
  styleUrls: ['./ad-dia-semana.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonCard, IonItem, 
    IonLabel, IonInput, IonButton, 
    IonFooter, RodapePage, MenuPage]
})
export class AdDiaSemanaPage implements OnInit {

  constructor(private router:Router
    ,private trimixservice:Trimixservices
  ) { }

dia : string = "";
  ngOnInit() {
  }
  listadia(){
    this.trimixservice.adddia(this.dia)
    this.router.navigate(["/dia-semana"]);
  }
  dia_semana(){
    this.router.navigate(["/dia-semana"]);
  }

}
