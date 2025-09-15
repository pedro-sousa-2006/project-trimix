import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonFooter } from '@ionic/angular/standalone';
import { MenuPage } from "./menu/menu.page";
import { RodapePage } from "./rodape/rodape.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonHeader, MenuPage, IonFooter, RodapePage],
})
export class AppComponent {
  constructor() {}
}
