import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPage } from "./forgot-password.page";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { initialRootState } from "src/app/store";

describe("ForgotPasswordPage", () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;
  let httptestcontroller: HttpTestingController;

  beforeEach(

    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForgotPasswordPage],
        imports: [IonicModule, RouterTestingModule, HttpClientTestingModule],
        providers: [provideMockStore({ initialState: initialRootState})],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],

      }).compileComponents();

      httptestcontroller = TestBed.inject(HttpTestingController);
      fixture = TestBed.createComponent(ForgotPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
