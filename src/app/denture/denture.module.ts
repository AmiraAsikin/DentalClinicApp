import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenturePageRoutingModule } from './denture-routing.module';

import { DenturePage } from './denture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenturePageRoutingModule
  ],
  declarations: [DenturePage]
})
export class DenturePageModule {}
