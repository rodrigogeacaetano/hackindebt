import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [NativeScriptModule, LoginRoutingModule, NativeScriptFormsModule],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpModule]
})
export class LoginModule {}
