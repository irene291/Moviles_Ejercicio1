import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeroDamPageRoutingModule } from './primero-dam-routing.module';

import { PrimeroDamPage } from './primero-dam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeroDamPageRoutingModule
  ],
  declarations: [PrimeroDamPage]
})
export class PrimeroDamPageModule {}
