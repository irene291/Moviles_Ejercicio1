import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagTabsPage } from './pag-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PagTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagTabsPageRoutingModule {}
