import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})
export class CashbackComponent implements OnInit {
  public value: number;

  constructor() {
    this.value = 50;
  }

  ngOnInit(): void {
  }

}
