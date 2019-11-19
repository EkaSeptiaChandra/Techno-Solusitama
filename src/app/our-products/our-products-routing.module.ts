import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurProductsPage } from './our-products.page';

const routes: Routes = [
  {
    path: '',
    component: OurProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurProductsPageRoutingModule {}
