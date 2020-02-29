import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticatorService } from '../_services/auth/authenticator.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthenticatorService, protected router: Router) { }

  ngOnInit(): void {
  }

  onClickLogin(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.router.navigate(['/login']);
  }

  onClickLogout(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.auth.logout();
  }
}
