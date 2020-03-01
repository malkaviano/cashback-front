import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { mock, instance } from 'ts-mockito';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MockComponent } from 'ng-mocks';

import { SalesComponent } from './sales.component';
import { TitleComponent } from '../title/title.component';

const mockedToast = mock(ToastrService);
const mockedBsModal = mock(BsModalService);

describe('SalesComponent', () => {
    let component: SalesComponent;
    let fixture: ComponentFixture<SalesComponent>;
    let httpMock: HttpTestingController;
    let url = 'http://testeUrl';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SalesComponent,
                MockComponent(TitleComponent)
            ],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: 'SALES_URL', useValue: url },
                { provide: ToastrService, useValue: instance(mockedToast) },
                { provide: BsModalService, useValue: instance(mockedBsModal) },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
