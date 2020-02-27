import { TestBed } from '@angular/core/testing';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../_services/auth.service';

const routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);
const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
const routerStateSnapshot = {} as RouterStateSnapshot;

routerSpy.parseUrl.and.callFake(() => 'login');

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            { provide: AuthService, useValue: authServiceSpy },
            { provide: Router,      useValue: routerSpy }
          ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when user is not authenticated', () => {
    it('should return login', () => {
        authServiceSpy.isLoggedIn.and.callFake(() => false);

        const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

        expect(result.valueOf()).toBe('login');
    })
  });

  describe('when user is authenticated', () => {
    it('should return true', () => {
        authServiceSpy.isLoggedIn.and.callFake(() => true);

        const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

        expect(result.valueOf()).toBeTrue();
    })
  });
});
