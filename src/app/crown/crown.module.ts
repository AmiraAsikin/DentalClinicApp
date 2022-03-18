import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrownPageRoutingModule } from './crown-routing.module';

import { CrownPage } from './crown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrownPageRoutingModule
  ],
  declarations: [CrownPage]
})
export class CrownPageModule {}
