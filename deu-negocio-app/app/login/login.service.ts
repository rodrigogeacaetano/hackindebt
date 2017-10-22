import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { AppComponent } from "../app.component";
import { User } from "../model/user";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService {
  
  public static USER_ID: Observable<string>;
  private alertInvalidUser: any = {
    title: "",
    message: "E-mail ou senha inválidos.",
    okButtonText: "OK"
  };

  constructor(private http: Http) {}

  public findByEmailAndPassword(password: string, email: string): any {
    this.http
      .get(
        User.USER_API +
          "/search/findByEmailAndPassword?password=" +
          password +
          "&email=" +
          email
      )
      .subscribe(
        response => {
          let user: any = response.json;
          return user;
        },
        error => {
          console.dir(error);
          alert(this.alertInvalidUser);
          throw Observable.throw("Not found.");
        }
      );
  }

  public findByExternalId(externalId: string): any {
    return this.http
      .get(User.USER_API + "/search/findByExternalId?externalId=" + externalId);
  }
}
