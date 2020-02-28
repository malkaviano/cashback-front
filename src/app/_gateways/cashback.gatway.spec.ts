import { TestBed } from '@angular/core/testing';

import { CashbackGateway } from './cashback.gateway';

describe('Cashbackgateway', () => {
  let gateway: CashbackGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(CashbackGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
