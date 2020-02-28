import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutingService } from './routing.service';
import { UrlTree } from '@angular/router';
import { instance, mock, when } from 'ts-mockito';

describe('RoutingService', () => {
  let service: RoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: 'DEFAULT_PAGE', useValue: '/home' },
        { provide: 'AUTH_PAGE', useValue: '/login' }
      ]
    });
    service = TestBed.inject(RoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#navDefault', () => {
    it('should return /home', () => {
      const result = service.defaultPath();

      expect(result.toString()).toEqual('/home');
    });
  });

  describe('#navAuth', () => {
    it('should return /login', () => {
      const result = service.authPath();

      expect(result.toString()).toEqual('/login');
    });
  });
});
