import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoDamPage } from './segundo-dam.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoDamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoDamPageRoutingModule {}
