import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenturePage } from './denture.page';

const routes: Routes = [
  {
    path: '',
    component: DenturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenturePageRoutingModule {}
