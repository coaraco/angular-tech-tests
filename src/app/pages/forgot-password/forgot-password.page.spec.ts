import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPage } from "./forgot-password.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http"; // Import the HttpClientModule

describe("ForgotPasswordPage", () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordPage],
      imports: [IonicModule, RouterTestingModule, HttpClientModule], // Add HttpClientModule to the imports array
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
