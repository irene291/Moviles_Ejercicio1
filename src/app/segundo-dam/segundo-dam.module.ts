import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoDamPageRoutingModule } from './segundo-dam-routing.module';

import { SegundoDamPage } from './segundo-dam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoDamPageRoutingModule
  ],
  declarations: [SegundoDamPage]
})
export class SegundoDamPageModule {}
