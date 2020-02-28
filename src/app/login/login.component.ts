import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../_services/auth.service';
import { RoutingService } from '../_services/router/routing.service';

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
    private auth: AuthService,
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
    this.auth.login(value);
  }
}
