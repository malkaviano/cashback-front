import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CashbackGateway } from './cashback.gateway';

describe('Cashbackgateway', () => {
  let gateway: CashbackGateway;
  let httpMock: HttpTestingController;
  let url = 'http://testeUrl';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: 'CASHBACK_URL', useValue: url }
      ]
    });

    gateway = TestBed.inject(CashbackGateway);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });

  describe("#get", () => {
    it("gets the cashback response", () => {
      gateway.get().subscribe();

      const req = httpMock.expectOne("http://testeUrl/123123123");

      expect(req.request.method).toBe("GET");
    });
  });
});
