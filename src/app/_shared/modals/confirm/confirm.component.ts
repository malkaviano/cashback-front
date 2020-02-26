import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.notifyParent.emit(false);

    this.close();
  }

  confirm(): void {
    this.notifyParent.emit(true);

    this.close();
  }

  private close(): void {
    this.bsModalRef.hide();
  }
}
