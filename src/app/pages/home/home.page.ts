import { Component, OnInit } from "@angular/core";
import { RootState } from "src/app/store";
import { Store } from "@ngrx/store";
import * as UserActions from "src/app/store/user/user.actions";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit{
  public user = {
    name: "",
    username:"",
    email:"",
    phone:"",
    job:"",
    location:"",
    status: "",
  };

  public seccion: boolean = true;

  public manipularStatus: boolean = false;

  constructor(private store: Store<RootState>, private http: HttpClient) {}

  public ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.http.get("https://httpbin.org/anything").subscribe((res: any)=>{
      if (res){
        res.json = {
          name: "Ragin Diler",
          username: "ragip",
          email: "dilerragip@gmail.com",
          phone: "+1 (555)-555-5555",
          job: "Product Designer",
          location: "Angara, Turkey",
          status: "",
        };
      };
    this.user = res.json;
    });
  }

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
