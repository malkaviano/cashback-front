import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.css']
})
export class ResellerComponent implements OnInit {
  public title: string;

  constructor(private http: HttpClient, @Inject('RESELLER_URL') private url: string, private toastr: ToastrService) {
    this.title = "Reseller";
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.http.post(this.url, form)
      .subscribe(
        done => this.toastr.success("Reseller created"),
        error => {
          console.error(error);

          this.toastr.error("Reseller creation error")
        }
      );
  }
}
