import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})
export class CashbackComponent implements OnInit {
  public value: number;
  public title: string;

  constructor(private http: HttpClient, @Inject('SERVER_URL') private url: string) {
    this.title = "Cashback";
  }

  ngOnInit(): void {
    this.http.get(`${this.url}/cashback/123123123`)
      .subscribe(
        done => this.value = done['body']['credit'],
        error => console.error(error)
      );
  }

}
