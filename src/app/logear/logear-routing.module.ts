import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogearPage } from './logear.page';

const routes: Routes = [
  {
    path: '',
    component: LogearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogearPageRoutingModule {}
