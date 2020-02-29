import { Injectable, Inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(
    private router: Router,
    @Inject('DEFAULT_PAGE') private defaultPage: string,
    @Inject('AUTH_PAGE') private authPage: string
  ) { }

  // TODO: Change this to event
  navTo(url: string | UrlTree): Promise<boolean> {
    return this.router.navigateByUrl(url)
      .then(r => r)
      .catch(e => {
        return false;
      });
  }

  authPath(): UrlTree {
    return this.router.parseUrl(this.authPage);
  }

  defaultPath(): UrlTree {
    return this.router.parseUrl(this.defaultPage);
  }
}
