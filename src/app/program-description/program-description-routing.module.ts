import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramDescriptionPage } from './program-description.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramDescriptionPageRoutingModule {}
