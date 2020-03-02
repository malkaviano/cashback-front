import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit {
  public salesForm: FormGroup;
  public title: string;
  public cpf: string;
  public data: Date;
  public code: string;
  public value: string;
  public update: boolean;

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.salesForm = this.fb.group({
      'cpf': new FormControl({ value: this.cpf, disabled: this.update }, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      'value': new FormControl(this.value, [Validators.required, CustomValidators.number]),
      'code': new FormControl({ value: this.code, disabled: this.update }, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      'data': new FormControl(this.data, [Validators.required, CustomValidators.date])
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  onSave(form: any): void {
    if (!this.salesForm.valid) return;

    if (this.update) Object.assign(form, { code: this.salesForm.controls['code'].value });

    this.notifyParent.emit(form);

    this.onClose();
  }
}
