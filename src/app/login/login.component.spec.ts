// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// import { mock, instance, verify, when, anything, reset } from 'ts-mockito';
// import { MockComponent } from 'ng-mocks';

// import { LoginComponent } from './login.component';
// import { AuthService } from '../_services/auth.service';
// import { RoutingService } from '../_services/router/routing.service';
// import { TitleComponent } from '../title/title.component';

// const mockedAuthService = mock(AuthService);
// const mockedRoutingService = mock(RoutingService);

// describe('LoginComponent', () => {
//     let component: LoginComponent;
//     let fixture: ComponentFixture<LoginComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 LoginComponent,
//                 MockComponent(TitleComponent)
//             ],
//             imports: [ReactiveFormsModule],
//             providers: [
//                 { provide: AuthService, useValue: instance(mockedAuthService) },
//                 { provide: RoutingService, useValue: instance(mockedRoutingService) },
//                 FormBuilder
//             ]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(LoginComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     afterEach(() => {
//         reset(mockedRoutingService);
//     });

//     describe('ngOnInit', () => {
//         describe('when user is logged in', () => {
//             it('should not invoke navigation', () => {
//                 when(mockedAuthService.isLoggedIn()).thenReturn(true);

//                 verify(mockedRoutingService.navTo(anything())).never();
//             });
//         });

//         describe('when user is not logged in', () => {
//             it('should invoke navigation', () => {
//                 when(mockedAuthService.isLoggedIn()).thenReturn(false);

//                 verify(mockedRoutingService.navTo(anything())).once();
//             });
//         });
//     });

//     describe('onLogin', () => {
//         it('should invoke login', () => {
//             component.onLogin({});

//             verify(mockedAuthService.login(anything())).once();
//         });

//     });
// });
