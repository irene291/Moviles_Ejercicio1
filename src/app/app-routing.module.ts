import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'pag-tabs',
    loadChildren: () => import('./pag-tabs/pag-tabs.module').then( m => m.PagTabsPageModule)
  },
  {
    path: 'primero-dam',
    loadChildren: () => import('./primero-dam/primero-dam.module').then( m => m.PrimeroDamPageModule)
  },
  {
    path: 'segundo-dam',
    loadChildren: () => import('./segundo-dam/segundo-dam.module').then( m => m.SegundoDamPageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('./fct/fct.module').then( m => m.FctPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
