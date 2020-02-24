import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashbackComponent } from './cashback/cashback.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cashback', component: CashbackComponent, canActivate: [ AuthGuard ] },
  { path: 'reseller', component: ResellerComponent, canActivate: [ AuthGuard ] },
  { path: 'sales', component: SalesComponent, canActivate: [ AuthGuard ] },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
