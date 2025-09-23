import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { MenuPage } from "../menu/menu.page";
import { RodapePage } from "../rodape/rodape.page";
import { Router } from '@angular/router';   

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule,
    MenuPage, RodapePage,
    IonLabel, IonInput, IonButton,
    IonItem,
    IonList
]
})
export class TelaLoginPage implements OnInit {

  email = "";
  senha = "";
  mensagem = "";

  constructor(private router: Router) {}

  adicionar() {
    if (this.email !== "pedro@hotmail.com") {
      this.mensagem = "Email inválido!";
    } else if (this.senha !== "123") {
      this.mensagem = "Senha inválida!";
    } else {
      this.router.navigate(["/adicionar"]);
    }
  }
  telacadastro(){
    this.router.navigate(["/tela-cadastro"]);
  }
  input(){
    this.mensagem = "";
  }

  ngOnInit() {}
}
