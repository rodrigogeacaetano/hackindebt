import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { AppComponent } from "../app.component";
import { LoginService } from "../login/login.service";
import { User } from "../model/user";
import { Observable } from "rxjs/Rx";

@Injectable()
export class RegisterService {
  constructor(private http: Http) {}

  public create(user: User): any {
    return this.http.post(User.USER_API, user);
  }
}
