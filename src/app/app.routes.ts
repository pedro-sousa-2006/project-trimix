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
  },  {
    path: 'tela-login',
    loadComponent: () => import('./tela-login/tela-login.page').then( m => m.TelaLoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'tela-cadastro',
    loadComponent: () => import('./tela-cadastro/tela-cadastro.page').then( m => m.TelaCadastroPage)
  },
  {
    path: 'tela-cadastro',
    loadComponent: () => import('./tela-cadastro/tela-cadastro.page').then( m => m.TelaCadastroPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'ida-semana',
    loadComponent: () => import('./ida-semana/ida-semana.page').then( m => m.IdaSemanaPage)
  },
  {
    path: 'autenticacao-cliente',
    loadComponent: () => import('./autenticacao-cliente/autenticacao-cliente.page').then( m => m.AutenticacaoClientePage)
  },
  {
    path: 'dia-semana',
    loadComponent: () => import('./dia-semana/dia-semana.page').then( m => m.DiaSemanaPage)
  },
  {
    path: 'ad-dia-semana',
    loadComponent: () => import('./ad-dia-semana/ad-dia-semana.page').then( m => m.AdDiaSemanaPage)
  },
  {
    path: 'gerenciar-usuarios',
    loadComponent: () => import('./gerenciar-usuarios/gerenciar-usuarios.page').then( m => m.GerenciarUsuariosPage)
  },
  {
    path: 'add-cliente-lista',
    loadComponent: () => import('./add-cliente-lista/add-cliente-lista.page').then( m => m.AddClienteListaPage)
  },
  {
    path: 'entrargoogle',
    loadComponent: () => import('./entrargoogle/entrargoogle.page').then( m => m.EntrargooglePage)
  },
  {
    path: 'entrartelefone',
    loadComponent: () => import('./entrartelefone/entrartelefone.page').then( m => m.EntrartelefonePage)
  },


];
