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
  public static USER: User;

  public email: string;
  public password: string;

  private alertErrorFacebook: any = {
    title: "",
    message: "Houve um problema ao logar pelo Facebook.",
    okButtonText: "OK"
  };
  private alertErrorGoogle: any = {
    title: "",
    message: "Houve um problema ao logar pelo Google.",
    okButtonText: "OK"
  };

  constructor(
    public loginService: LoginService,
    private routerExtensions: RouterExtensions
  ) {}

  public ngOnInit(): void {
    firebase
      .init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        // storageBucket: 'gs://al-grano.appspot.com'
        onAuthStateChanged: data => {
          // optional but useful to immediately re-logon the user when he re-visits your app
          console.log(
            data.loggedIn ? "Logged in to firebase" : "Logged out from firebase"
          );
          if (data.loggedIn) {
            console.log(
              "user's uid: " + (data.user.uid ? data.user.uid : "N/A")
            );
            this.loginService
              .findByExternalId(data.user.uid)
              .subscribe(response => {
                this.routerExtensions.navigate(["/home"], {
                  clearHistory: true
                });
              });
          }
        }
      })
      .then(
        instance => {
          console.log("firebase.init done");
        },
        error => {
          console.log("firebase.init error: " + error);
        }
      );
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
        socialUser => {
          this.findByExternalId(
            firebase.LoginType.FACEBOOK.toString(),
            socialUser
          );
        },
        error => {
          console.log(error);
          alert(this.alertErrorFacebook);
        }
      );
  }

  public onLoginWithGoogleButtonTap(): void {
    firebase
      .login({
        type: firebase.LoginType.GOOGLE
      })
      .then(
        socialUser => {
          this.findByExternalId(
            firebase.LoginType.GOOGLE.toString(),
            socialUser
          );
        },
        error => {
          console.log(error);
          alert(this.alertErrorGoogle);
        }
      );
  }

  public onSigninButtonTap(): void {
    const email = this.email;
    const password = this.password;
    LoginComponent.USER = this.loginService.findByEmailAndPassword(
      password,
      email
    );
  }

  public onForgotPasswordTap(): void {}

  private findByExternalId(authenticationType: string, socialUser: any) {
    this.loginService.findByExternalId(socialUser.uid).subscribe(
      response => {
        let user: any = response.json;
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
      },
      error => {
        console.log(error);
        this.mapUser(authenticationType, socialUser);
        this.routerExtensions.navigate(["/register"], { clearHistory: true });
      }
    );
  }

  private mapUser(authenticationType: string, socialUser: any): void {
    let user = new User(authenticationType);
    user.externalId = socialUser.uid;
    user.email = socialUser.email;
    user.name = socialUser.name;
    LoginComponent.USER = user;
  }
}
