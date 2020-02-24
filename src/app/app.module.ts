import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { JwtModule } from "@auth0/angular-jwt";

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

const LOGIN_URL = "http://localhost/api/auth/login";
const SERVER_URL = "http://localhost/api";

@NgModule({
  declarations: [
    AppComponent,
    CashbackComponent,
    ResellerComponent,
    SalesComponent,
    NavComponent,
    TitleComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
        whitelistedDomains: ['localhost']
      }
    })
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    { provide: 'SERVER_URL', useValue: SERVER_URL },
    { provide: 'LOGIN_URL', useValue: LOGIN_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
