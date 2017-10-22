"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var register_routing_module_1 = require("./register-routing.module");
var register_component_1 = require("./register.component");
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, register_routing_module_1.RegisterRoutingModule, forms_1.NativeScriptFormsModule],
            declarations: [register_component_1.RegisterComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [http_1.HttpModule]
        })
    ], RegisterModule);
    return RegisterModule;
}());
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNDQUEyQztBQUUzQyxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHFFQUFrRTtBQUNsRSwyREFBeUQ7QUFRekQ7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFOMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsK0NBQXFCLEVBQUUsK0JBQXVCLENBQUM7WUFDN0UsWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsaUJBQVUsQ0FBQztTQUN4QixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZ2lzdGVyLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBSZWdpc3RlclJvdXRpbmdNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVnaXN0ZXJDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW0h0dHBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyTW9kdWxlIHt9XG4iXX0=