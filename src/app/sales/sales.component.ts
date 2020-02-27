import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { Sales } from '../_shared/models/sales.model';
import { SaleFormComponent } from '../_shared/modals/forms/sale-form.component';
import { ConfirmComponent } from '../_shared/modals/confirm/confirm.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public title: string;
  public sales: Sales[];
  public faEdit = faEdit;
  public faEraser = faEraser;
  public bsModalRef: BsModalRef;
  public dialogRef: BsModalRef;

  constructor(
    private http: HttpClient,
    @Inject('SALES_URL') private url: string,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
    this.title = "SALES";
  }

  ngOnInit(): void {
    this.load();
  }

  openModal(sale: any = null): void {
    const date = sale ? new Date(sale.data) : new Date();

    const initialState = {
      title: sale ? 'Update Sale' : 'Create Sale',
      update: sale !== null,
      cpf: sale?.cpf,
      data: date,
      value: sale?.value,
      code: sale?.code
    };


    this.bsModalRef = this.modalService.show(SaleFormComponent, { initialState });

    this.bsModalRef.content.notifyParent.subscribe((result) => {
      if (sale) {
        this.update(result);
      } else {
        this.create(result);
      }
    });
  }

  openDialog(code: string): void {
    this.dialogRef = this.modalService.show(ConfirmComponent);

    this.dialogRef.content.notifyParent.subscribe((result) => {
      if (result) {
        this.delete(code);
      }
    });
  }

  load(): void {
    this.http.get(this.url)
      .subscribe(
        response => {
          this.sales = response as Sales[];
        },
        error => {
          console.error(error);

          this.toastr.error("Failure getting sales")
        }
      );
  }

  create(form: any): void {
    this.http.post(this.url, form)
      .subscribe(
        _ => {
          this.load();

          this.toastr.success("Sale created");
        },
        error => {
          console.error(error);

          this.toastr.error("Failure creating sale");
        }
      );
  }

  update(form: any): void {
    this.http.put(this.url, form)
      .subscribe(
        _ => {
          this.load();

          this.toastr.success("Sale updated");
        },
        error => {
          console.error(error);

          this.toastr.error("Failure updating sale");
        }
      );
  }

  delete(code: string): void {
    this.http.delete(`${this.url}/${code}`)
      .subscribe(
        _ => {
          this.load();

          this.toastr.success("Sale removed");
        },
        error => {
          console.error(error);

          this.toastr.error("Failure removing sale");
        }
      );
  }
}
