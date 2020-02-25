import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import pt from '@angular/common/locales/pt';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import { JwtModule } from "@auth0/angular-jwt";
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashbackComponent } from './cashback/cashback.component';
import { ResellerComponent } from './reseller/reseller.component';
import { SalesComponent } from './sales/sales.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { OnlyNumbersDirective } from './_helpers/only-numbers.directive';
import { FormComponent } from './sales/shared/forms/form.component';

const LOGIN_URL = "http://localhost/api/auth/login";
const SERVER_URL = "http://localhost/api";
const RESELLER_URL = "http://localhost/api/reseller";
const SALES_URL = "http://localhost/api/sales";

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
    OnlyNumbersDirective,
    FormComponent
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
        whitelistedDomains: ['localhost']
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: AuthService, useClass: AuthService },
    { provide: 'SERVER_URL', useValue: SERVER_URL },
    { provide: 'LOGIN_URL', useValue: LOGIN_URL },
    { provide: 'RESELLER_URL', useValue: RESELLER_URL },
    { provide: 'SALES_URL', useValue: SALES_URL },
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
