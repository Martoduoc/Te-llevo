import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },

  {
    path: 'logear',
    loadChildren: () => import('./logear/logear.module').then( m => m.LogearPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),

  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule),
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule),
  },
  {
    path: 'recu-contra',
    loadChildren: () => import('./recu-contra/recu-contra.module').then(m => m.RecuContraPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotFoundPageModule)
  },

  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
