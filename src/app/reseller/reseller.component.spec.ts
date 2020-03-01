import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { mock, instance } from 'ts-mockito';
import { ToastrService } from 'ngx-toastr';
import { MockComponent } from 'ng-mocks';

import { ResellerComponent } from './reseller.component';
import { TitleComponent } from '../title/title.component';
import { FormsModule } from '@angular/forms';

const mockedToast = mock(ToastrService);

describe('ResellerComponent', () => {
    let component: ResellerComponent;
    let fixture: ComponentFixture<ResellerComponent>;
    let httpMock: HttpTestingController;
    let url = 'http://testeUrl';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResellerComponent,
                MockComponent(TitleComponent)
            ],
            imports: [
                HttpClientTestingModule,
                FormsModule
            ],
            providers: [
                { provide: 'RESELLER_URL', useValue: url },
                { provide: ToastrService, useValue: instance(mockedToast) }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResellerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
