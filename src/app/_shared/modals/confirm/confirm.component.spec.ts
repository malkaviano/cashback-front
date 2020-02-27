import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmComponent } from './confirm.component';

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmComponent ],
      providers: [ BsModalRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('when close button is clicked', () => {
    it('should return false', () => {
        const close = fixture.debugElement.query(By.css('.btn-danger'));

        let result: boolean;

        component.notifyParent.subscribe((r: boolean) => result = r);

        close.triggerEventHandler('click', null);

        expect(result).toBeFalse();
      });
  });

  describe('when confirm button is clicked', () => {
    it('should return true', () => {
        const confirm = fixture.debugElement.query(By.css('.btn-success'));

        let result: boolean;

        component.notifyParent.subscribe((r: boolean) => result = r);

        confirm.triggerEventHandler('click', null);

        expect(result).toBeTrue();
      });
  });
});
