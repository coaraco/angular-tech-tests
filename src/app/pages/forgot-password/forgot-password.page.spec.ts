import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPage } from "./forgot-password.page";
import { RouterTestingModule } from "@angular/router/testing";


describe("ForgotPasswordPage", () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForgotPasswordPage],
        imports: [IonicModule, RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(ForgotPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
