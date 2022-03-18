import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BracesPage } from './braces.page';

const routes: Routes = [
  {
    path: '',
    component: BracesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BracesPageRoutingModule {}
