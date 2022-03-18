import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScalingPage } from './scaling.page';

const routes: Routes = [
  {
    path: '',
    component: ScalingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScalingPageRoutingModule {}
