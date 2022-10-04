import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagTabsPageRoutingModule } from './pag-tabs-routing.module';

import { PagTabsPage } from './pag-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagTabsPageRoutingModule
  ],
  declarations: [PagTabsPage]
})
export class PagTabsPageModule {}
