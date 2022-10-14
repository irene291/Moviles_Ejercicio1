import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroDamPage } from './primero-dam.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeroDamPage
  }/*,
  {
    path: 'dam2',
    loadChildren: () => import('../segundo-dam/segundo-dam.module').then( m => m.SegundoDamPageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('../fct/fct.module').then( m => m.FctPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeroDamPageRoutingModule {}
