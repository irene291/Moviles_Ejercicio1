import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoDamPage } from './segundo-dam.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoDamPage
  }/*,
  {
    path: 'dam1',
    loadChildren: () => import('../primero-dam/primero-dam.module').then( m => m.PrimeroDamPageModule)
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
export class SegundoDamPageRoutingModule {}
