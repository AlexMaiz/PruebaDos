import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PerfilGuard } from './guadianes/perfil.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./paginas/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule),canActivate : [PerfilGuard]
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./paginas/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
