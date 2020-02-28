import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mock, instance, when } from 'ts-mockito';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CashbackComponent } from './cashback.component';
import { CashbackGateway } from '../_gateways/cashback.gateway';
import { TitleComponent } from '../title/title.component';

const mockedGateway = mock(CashbackGateway);
const gateway = instance(mockedGateway);

when(mockedGateway.get()).thenReturn(of({ body: { credit: 10 } }));

describe('CashbackComponent', () => {
    let component: CashbackComponent;
    let fixture: ComponentFixture<CashbackComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CashbackComponent,
                MockComponent(TitleComponent)
            ],
            providers: [
                { provide: CashbackGateway, useValue: gateway }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CashbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component.value).toBe(10);
    });
});
