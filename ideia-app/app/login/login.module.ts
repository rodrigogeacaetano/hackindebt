import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [NativeScriptModule, LoginRoutingModule],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpModule]
})
export class LoginModule {}
