import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurProductsPageRoutingModule } from './our-products-routing.module';

import { OurProductsPage } from './our-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurProductsPageRoutingModule
  ],
  declarations: [OurProductsPage]
})
export class OurProductsPageModule {}
