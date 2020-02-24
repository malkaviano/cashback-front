import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashbackComponent } from './cashback/cashback.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: 'cashback', component: CashbackComponent },
  { path: 'reseller', component: ResellerComponent },
  { path: 'sales', component: SalesComponent },
  { path: '',
    redirectTo: '/cashback',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
