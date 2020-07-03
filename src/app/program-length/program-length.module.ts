import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramLengthPageRoutingModule } from './program-length-routing.module';

import { ProgramLengthPage } from './program-length.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramLengthPageRoutingModule
  ],
  declarations: [ProgramLengthPage]
})
export class ProgramLengthPageModule {}
