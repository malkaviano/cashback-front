import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashbackComponent } from './cashback/cashback.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cashback', component: CashbackComponent },
  { path: 'reseller', component: ResellerComponent },
  { path: 'sales', component: SalesComponent },
  { path: '',
    redirectTo: '/cashback',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/cashback' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
