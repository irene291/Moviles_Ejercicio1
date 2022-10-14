import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FctPage } from './fct.page';

const routes: Routes = [
  {
    path: '',
    component: FctPage
  }/*,
  {
    path: 'dam1',
    loadChildren: () => import('../primero-dam/primero-dam.module').then( m => m.PrimeroDamPageModule)
  },
  {
    path: 'dam2',
    loadChildren: () => import('../segundo-dam/segundo-dam.module').then( m => m.SegundoDamPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FctPageRoutingModule {}
