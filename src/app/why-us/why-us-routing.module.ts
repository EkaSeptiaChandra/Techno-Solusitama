import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyUsPage } from './why-us.page';

const routes: Routes = [
  {
    path: '',
    component: WhyUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyUsPageRoutingModule {}
