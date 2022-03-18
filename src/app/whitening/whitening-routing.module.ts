import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiteningPage } from './whitening.page';

const routes: Routes = [
  {
    path: '',
    component: WhiteningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiteningPageRoutingModule {}
