import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { LoginService } from "./login/login.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  ngOnInit() {

  }
}
