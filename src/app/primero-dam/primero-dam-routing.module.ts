import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeroDamPage } from './primero-dam.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeroDamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeroDamPageRoutingModule {}
