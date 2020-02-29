import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,
    private storage: Storage,
    @Inject('LOGIN_URL') private loginUrl: string
  ) {

  }

  login(model: any): Observable<boolean> {
    return this.http.post(this.loginUrl, model)
      .pipe(
        map((result: any) => {
          this.setSession(result);

          return true;
        }),
        catchError((_) => of(false))
      );
  }

  logout(): void {
    this.removeSession();
  }

  isLoggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired(this.storage.getItem("token"));
  }

  userName(): string {
    return this.storage.getItem('unique_name');
  }

  private setSession(authResult) {
    const decodedToken = this.jwtHelperService.decodeToken(authResult.token);

    this.storage.setItem('unique_name', decodedToken['unique_name']);
    this.storage.setItem('token', authResult['token']);
  }

  private removeSession() {
    this.storage.removeItem('token');
    this.storage.removeItem('unique_name');
  }
}
