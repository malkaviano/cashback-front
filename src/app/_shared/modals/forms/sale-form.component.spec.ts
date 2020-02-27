import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { SaleFormComponent } from './sale-form.component';

describe('FormComponent', () => {
    let component: SaleFormComponent;
    let fixture: ComponentFixture<SaleFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SaleFormComponent],
            imports: [
                BsDatepickerModule.forRoot(),
                ReactiveFormsModule
            ],
            providers: [
                BsModalRef,
                FormBuilder
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SaleFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe("#onSave", () => {
        describe("when form is valid", () => {
            it("should invoke notifyParent", () => {
                const form = fixture.debugElement.query(By.css('.form'));

                component.salesForm.controls['cpf'].setValue('11111111111');
                component.salesForm.controls['code'].setValue('XPTO');
                component.salesForm.controls['value'].setValue(10);
                component.salesForm.controls['data'].setValue('01/01/2000 10:10:10');

                let result;
                component.notifyParent.subscribe(r => result = r);

                form.triggerEventHandler('submit', component.salesForm.value);

                expect(result).toEqual({
                    cpf: '11111111111',
                    value: 10,
                    code: 'XPTO',
                    data: '01/01/2000 10:10:10'
                });
            });
        });

        describe("when form not is valid", () => {
            it("should not invoke notifyParent", () => {
                const form = fixture.debugElement.query(By.css('.form'));

                component.salesForm.controls['cpf'].setValue('11111');
                component.salesForm.controls['code'].setValue('');
                component.salesForm.controls['value'].setValue(10);
                component.salesForm.controls['data'].setValue('01/01/2000 10:10:10');

                let result;
                component.notifyParent.subscribe(r => result = r);

                form.triggerEventHandler('submit', component.salesForm.value);

                expect(result).toBeUndefined();
            });
        });
    });

    describe("formcontrol validation", () => {
        [
            { name: 'cpf', error: 'required', value: '' },
            { name: 'cpf', error: 'minlength', value: 'X' },
            { name: 'cpf', error: 'maxlength', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { name: 'code', error: 'required', value: '' },
            { name: 'code', error: 'minlength', value: 'X' },
            { name: 'code', error: 'maxlength', value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' },
            { name: 'value', error: 'required', value: '' },
            { name: 'value', error: 'number', value: 'number' },
            { name: 'data', error: 'required', value: '' },
            { name: 'data', error: 'date', value: 'wrong date' },
        ].forEach(({name, error, value}) => {
            it(`should have ${error} error`, () => {
                const cpf = component.salesForm.controls[name];

                cpf.setValue(value);

                expect(cpf.hasError(error)).toBeTrue();
            });
        });
    });
});
