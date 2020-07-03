import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramLengthPage } from './program-length.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramLengthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramLengthPageRoutingModule {}
