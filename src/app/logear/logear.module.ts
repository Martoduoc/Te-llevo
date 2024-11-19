import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogearPageRoutingModule } from './logear-routing.module';

import { LogearPage } from './logear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogearPageRoutingModule
  ],
  declarations: [LogearPage]
})
export class LogearPageModule {}
