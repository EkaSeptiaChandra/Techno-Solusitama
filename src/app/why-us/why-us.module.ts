import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyUsPageRoutingModule } from './why-us-routing.module';

import { WhyUsPage } from './why-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhyUsPageRoutingModule
  ],
  declarations: [WhyUsPage]
})
export class WhyUsPageModule {}
