import { Component, OnInit, Inject } from '@angular/core';
import { CashbackGateway } from '../_gateways/cashback.gateway';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})
export class CashbackComponent implements OnInit {
  public value: number;
  public title: string;

  constructor(private gateway: CashbackGateway) {
    this.title = "Cashback";
  }

  ngOnInit(): void {
    this.gateway.get()
      .subscribe(
        done => this.value = done['body']['credit'],
        error => console.error(error)
      );
  }

}
