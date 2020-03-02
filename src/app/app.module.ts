import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { JwtModule } from "@auth0/angular-jwt";
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashbackComponent } from './cashback/cashback.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SalesComponent } from './sales/sales.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SaleFormComponent } from './_shared/modals/forms/sale-form.component';
import { ConfirmComponent } from './_shared/modals/confirm/confirm.component';

const ADDRESS = 'localhost';
const SERVER_URL = `http://${ADDRESS}/api`;
const LOGIN_URL = `${SERVER_URL}/auth/login`;
const RESELLER_URL = `${SERVER_URL}/reseller`;
const SALES_URL = `${SERVER_URL}/sales`;
const CASHBACK_URL = `${SERVER_URL}/cashback`;
const DEFAULT_PAGE = "/home";
const AUTH_PAGE = "/login";

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    CashbackComponent,
    ResellerComponent,
    SalesComponent,
    NavComponent,
    TitleComponent,
    LoginComponent,
    HomeComponent,
    SaleFormComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
        whitelistedDomains: [ ADDRESS ]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CustomFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: Storage, useValue: localStorage },
    { provide: 'CASHBACK_URL', useValue: CASHBACK_URL },
    { provide: 'LOGIN_URL', useValue: LOGIN_URL },
    { provide: 'RESELLER_URL', useValue: RESELLER_URL },
    { provide: 'SALES_URL', useValue: SALES_URL },
    { provide: 'DEFAULT_PAGE', useValue: DEFAULT_PAGE },
    { provide: 'AUTH_PAGE', useValue: AUTH_PAGE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
