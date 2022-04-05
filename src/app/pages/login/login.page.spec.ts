import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { LoginPage } from "./login.page";
import { provideMockStore } from "@ngrx/store/testing";
import { initialRootState } from "../../store";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule, RouterTestingModule],
        providers: [provideMockStore({ initialState: initialRootState })],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
