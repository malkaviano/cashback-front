import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private jwtHelperService: JwtHelperService,
        private router: Router,
        @Inject('LOGIN_URL') private loginUrl: string
    ) { }

    login(model: any) {
        return this.http.post(this.loginUrl, model)
            .subscribe(
                r => {
                    this.setSession(r);

                    this.router.navigate([ '/cashback' ]);
                },
                e => {
                    console.error("Login Failed");
                }
            );
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('unique_name');
    }

    isLoggedIn(): boolean {
        return !this.jwtHelperService.isTokenExpired(localStorage.getItem("token"));
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    userName(): string {
        return localStorage.getItem('unique_name');
    }

    private setSession(authResult) {
        const decodedToken = this.jwtHelperService.decodeToken(authResult.token);

        localStorage.setItem('unique_name', 'special2@gg.com');
        localStorage.setItem('token', authResult['token']);
    }
}