"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, login_routing_module_1.LoginRoutingModule, forms_1.NativeScriptFormsModule],
            declarations: [login_component_1.LoginComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [http_1.HttpModule]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNDQUEyQztBQUUzQyxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFRbkQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsV0FBVztRQU52QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx5Q0FBa0IsRUFBRSwrQkFBdUIsQ0FBQztZQUMxRSxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGlCQUFVLENBQUM7U0FDeEIsQ0FBQztPQUNXLFdBQVcsQ0FBRztJQUFELGtCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IExvZ2luUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2xvZ2luLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBMb2dpblJvdXRpbmdNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW0h0dHBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHt9XG4iXX0=