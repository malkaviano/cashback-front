import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashbackGateway {

  constructor(private http: HttpClient, @Inject('CASHBACK_URL') private url: string) { }

  get(): Observable<any> {
    // TODO: Remove this string, server should check the logged CPF
    return this.http.get(`${this.url}/123123123`);
  }
}
