import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rota inicial: redireciona para open-app
  {
    path: '',
    redirectTo: 'open-app',
    pathMatch: 'full',
  },

  // Tela de abertura do app
  {
    path: 'open-app',
    loadComponent: () =>
      import('./open-app/open-app.page').then(m => m.OpenAppPage),
  },

  // Tela de login
  {
    path: 'enter-conta',
    loadComponent: () =>
      import('./enter-conta/enter-conta.page').then(m => m.EnterContaPage),
  },

  // Tela de telefone
  {
    path: 'enter-telefone',
    loadComponent: () =>
      import('./enter-telefone/enter-telefone.page').then(
        m => m.EnterTelefonePage
      ),
  },

  // Tabs (página principal do app)
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes),
  },
];
