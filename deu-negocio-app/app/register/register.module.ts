import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";

@NgModule({
  imports: [NativeScriptModule, RegisterRoutingModule, NativeScriptFormsModule],
  declarations: [RegisterComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [HttpModule]
})
export class RegisterModule {}
