import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";

import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: User;

  constructor(
    private loginService: LoginService,
    private routerExtensions: RouterExtensions
  ) {}

  public ngOnInit(): void {
    if (this.loginService.isLoginAuthenticate()) {
      this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }
  }

  public onLoginWithFacebookButtonTap(): void {
    firebase
      .login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ["public_profile", "email", "user_about_me"]
        }
      })
      .then(
        function(result) {
          this.mapUser(firebase.LoginType.FACEBOOK.toString, result);
        },
        function(errorMessage) {
          console.log(errorMessage);
        }
      );
  }

  public onLoginWithGoogleButtonTap(): void {
    firebase
      .login({
        type: firebase.LoginType.GOOGLE
      })
      .then(
        function(result) {
          this.mapUser(firebase.LoginType.GOOGLE.toString, result);
        },
        function(errorMessage) {
          console.log(errorMessage);
        }
      );
  }

  public onSigninButtonTap(): void {
    const email = this.email;
    const password = this.password;
    this.user = this.loginService.findByEmailAndPassword(password, email);
  }

  public onForgotPasswordTap(): void {}

  public onRegisterButtonTap(): void {}

  private mapUser(authenticationType: string, socialUser: any): void {
    this.user = new User(authenticationType);
    this.user.externalId = socialUser.uid;
    this.user.email = socialUser.email;
    this.user.name = socialUser.name;
  }
}
