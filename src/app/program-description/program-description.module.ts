import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramDescriptionPageRoutingModule } from './program-description-routing.module';

import { ProgramDescriptionPage } from './program-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramDescriptionPageRoutingModule
  ],
  declarations: [ProgramDescriptionPage]
})
export class ProgramDescriptionPageModule {}
