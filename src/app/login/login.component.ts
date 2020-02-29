import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { RoutingService } from '../_services/router/routing.service';
import { AuthenticatorService } from '../_services/auth/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticatorService,
    private routingService: RoutingService
  ) {
    this.title = "Login";

    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.routingService.navTo(this.routingService.defaultPath());
    }
  }

  onLogin(value: any): void {
    this.auth.login(value).subscribe(
      s => {
        if (s) this.routingService.navTo(this.routingService.defaultPath());
      }
    );
  }
}
