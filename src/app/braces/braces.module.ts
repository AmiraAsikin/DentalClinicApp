import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BracesPageRoutingModule } from './braces-routing.module';

import { BracesPage } from './braces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BracesPageRoutingModule
  ],
  declarations: [BracesPage]
})
export class BracesPageModule {}
