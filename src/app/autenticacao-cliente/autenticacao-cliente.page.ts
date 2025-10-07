import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RodapePage } from "../rodape/rodape.page";
import { MenuPage } from "../menu/menu.page";

@Component({
  selector: 'app-autenticacao-cliente',
  templateUrl: './autenticacao-cliente.page.html',
  styleUrls: ['./autenticacao-cliente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonButton, RodapePage, MenuPage]
})
export class AutenticacaoClientePage implements OnInit {
constructor(private router: Router) { }

telefone = "";
mensagemerro = "";

input(){
this.mensagemerro = "";
}
autenticar(){
if(this.telefone == ""){
    this.router.navigate(["/dia-semana"]);

}else{
    this.mensagemerro = "Telefone nao cadastrado!"

}
}
voltar(){
  this.router.navigate(["/home"]);
}
  ngOnInit() {
  }

}
