import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AppComponent } from "../app.component";
import { User } from "../model/user";
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService {
  static USER_ID: string;
  static USER_API: string = AppComponent.DOMAIN + "/users";

  constructor(private http: Http) {}

  public isLoginAuthenticate(): boolean {
    if (!!LoginService.USER_ID) {
      this.http
        .get(LoginService.USER_API + "?externalId=" + LoginService.USER_ID)
        .subscribe(response => {
          let user: any = response.json;
          LoginService.USER_API = user.externalId;
          if (response.ok) {
            return true;
          }
        });
    }
    return false;
  }

  public findByEmailAndPassword(password: string, email: string): any {
    this.http
      .get(LoginService.USER_API + "?password=" + password + "&email=" + email)
      .subscribe(
        response => {
          let user: any = response.json;
          LoginService.USER_API = user.externalId;
          return user;
        },
        error => {
          console.dir(error);
          alert("E-mail ou senha inválidos.");
          throw Observable.throw("Not found.");
        }
      );
  }

  public findByExternalId(externalId: string): any {
    this.http
      .get(LoginService.USER_API + "?externalId=" + externalId)
      .subscribe(
        response => {
          let user: any = response.json;
          LoginService.USER_API = user.externalId;
          return user;
        },
        error => {
          alert("Usuário não cadastrado.");
          throw Observable.throw("Not found.");
        }
      );
  }
}
