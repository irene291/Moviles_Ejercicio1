import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagTabsPage } from './pag-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PagTabsPage
  },
  {
    path: 'dam1',
    loadChildren: () => import('../primero-dam/primero-dam.module').then( m => m.PrimeroDamPageModule)
  },
  {
    path: 'dam2',
    loadChildren: () => import('../segundo-dam/segundo-dam.module').then( m => m.SegundoDamPageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('../fct/fct.module').then( m => m.FctPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagTabsPageRoutingModule {}
