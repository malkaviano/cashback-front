import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { instance, mock, when } from 'ts-mockito';

import { AuthGuard } from './auth.guard';
import { AuthenticatorService } from '../_services/auth/authenticator.service';


const mockAuthService = mock(AuthenticatorService);
const authService = instance(mockAuthService);

const activatedRouteSnapshot = instance(mock(ActivatedRouteSnapshot));
const routerStateSnapshot = instance(mock(RouterStateSnapshot));

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthenticatorService, useValue: authService }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when user is not authenticated', () => {
    it('should return /login', () => {
      when(mockAuthService.isLoggedIn()).thenReturn(false);

      const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

      expect(result.valueOf().toString()).toEqual('/login');
    })
  });

  describe('when user is authenticated', () => {
    it('should return true', () => {
      when(mockAuthService.isLoggedIn()).thenReturn(true);

      const result = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

      expect(result.valueOf()).toBeTrue();
    })
  });
});
