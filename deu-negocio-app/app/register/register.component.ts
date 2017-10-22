import { Component, OnInit } from "@angular/core";
import { RegisterService } from "./register.service";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";

import firebase = require("nativescript-plugin-firebase");
import { LoginComponent } from "../login/login.component";
import { LoginService } from "../login/login.service";

@Component({
  selector: "Register",
  moduleId: module.id,
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  public user: User = LoginComponent.USER;
  public showPasswordInput: boolean = !this.user || !this.user.password;

  private alertInvalidUser: any = {
    title: "",
    message: "Valide os dados e tente novamente.",
    okButtonText: "OK"
  };

  constructor(
    public registerService: RegisterService,
    private routerExtensions: RouterExtensions
  ) {}

  public create() {
    if (!this.user.authenticationType) {
      this.user.authenticationType = "PLATFORM";
      this.user.externalId = this.randomExternalId();
    }

    this.user.authenticationType = this.user.authenticationType.toLocaleUpperCase();
    this.registerService.create(this.user).subscribe(
      response => {
        let user: any = response.json;
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
      },
      error => {
        console.log(error);
        alert(this.alertInvalidUser);
      }
    );
  }

  private mapUser(authenticationType: string, socialUser: any): void {
    this.user = new User(authenticationType);
    this.user.externalId = socialUser.uid;
    this.user.email = socialUser.email;
    this.user.name = socialUser.name;
  }

  private randomExternalId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
