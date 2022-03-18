import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScalingPageRoutingModule } from './scaling-routing.module';

import { ScalingPage } from './scaling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScalingPageRoutingModule
  ],
  declarations: [ScalingPage]
})
export class ScalingPageModule {}
