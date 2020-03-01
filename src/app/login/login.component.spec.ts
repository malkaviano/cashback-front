import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { mock, instance, verify, when, anything, reset } from 'ts-mockito';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthenticatorService } from '../_services/auth/authenticator.service';
import { RoutingService } from '../_services/router/routing.service';
import { TitleComponent } from '../title/title.component';

const mockedAuthService = mock(AuthenticatorService);
const mockedRoutingService = mock(RoutingService);

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                MockComponent(TitleComponent)
            ],
            imports: [ReactiveFormsModule],
            providers: [
                { provide: AuthenticatorService, useFactory: () => instance(mockedAuthService) },
                { provide: RoutingService, useValue: instance(mockedRoutingService) },
                FormBuilder
            ]
        }).compileComponents();
    }));

    function setup(): void {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    };

    afterEach(() => {
        reset(mockedRoutingService);
        reset(mockedAuthService);
    });

    describe('#ngOnInit', () => {
        describe('when user is logged in', () => {
            beforeEach(() => {
                when(mockedAuthService.isLoggedIn()).thenReturn(true);

                setup();
            });

            it('should invoke navigation', () => {
                verify(mockedRoutingService.navTo(anything())).once();
            });
        });

        describe('when user is not logged in', () => {
            beforeEach(() => {
                when(mockedAuthService.isLoggedIn()).thenReturn(false);

                setup();
            });

            it('should invoke navigation', () => {
                verify(mockedRoutingService.navTo(anything())).never();
            });
        });
    });

    describe('#login', () => {
        beforeEach(() => {
            when(mockedAuthService.login(anything())).thenReturn(of(true));

            setup();
        });

        describe("when form not is valid", () => {
            it("should not invoke login", () => {
                const form = fixture.debugElement.query(By.css('.form'));

                component.loginForm.controls['email'].setValue('11111');
                component.loginForm.controls['password'].setValue('xpto0000');

                form.triggerEventHandler('submit', component.loginForm.value);

                verify(mockedAuthService.login(anything())).never();
            });
        });

        describe("when form is valid", () => {
            it("should invoke login", () => {
                const form = fixture.debugElement.query(By.css('.form'));

                component.loginForm.controls['email'].setValue('xpto@xpto.com');
                component.loginForm.controls['password'].setValue('xpto0000');

                form.triggerEventHandler('submit', component.loginForm.value);

                verify(mockedAuthService.login(anything())).once();

                verify(mockedRoutingService.navTo(anything())).once();
            });
        });
    });
});
