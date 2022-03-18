import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiteningPageRoutingModule } from './whitening-routing.module';

import { WhiteningPage } from './whitening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiteningPageRoutingModule
  ],
  declarations: [WhiteningPage]
})
export class WhiteningPageModule {}
