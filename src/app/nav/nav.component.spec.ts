import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { mock, instance } from 'ts-mockito';

import { NavComponent } from './nav.component';
import { AuthenticatorService } from '../_services/auth/authenticator.service';

const mockedAuth = mock(AuthenticatorService)

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavComponent],
            providers: [
                { provide: AuthenticatorService, useValue: instance(mockedAuth) }
            ],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
