import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'open-app',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'rodape',
    loadComponent: () => import('./rodape/rodape.page').then( m => m.RodapePage)
  },
  {
    path: 'adicionar',
    loadComponent: () => import('./adicionar/adicionar.page').then( m => m.AdicionarPage)
  },
  {
    path: 'lista-horarios',
    loadComponent: () => import('./lista-horarios/lista-horarios.page').then( m => m.ListaHorariosPage )},
  {
    path: 'add-horario',
    loadComponent: () => import('./add-horario/add-horario.page').then( m => m.AddHorarioPage)
  },
  {
    path: 'cliente',
    loadComponent: () => import('./cliente/cliente.page').then( m => m.ClientePage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'open-app',
    loadComponent: () => import('./open-app/open-app.page').then( m => m.OpenAppPage)
  },

];
