"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var register_service_1 = require("./register.service");
var router_1 = require("nativescript-angular/router");
var user_1 = require("../model/user");
var login_component_1 = require("../login/login.component");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, routerExtensions) {
        this.registerService = registerService;
        this.routerExtensions = routerExtensions;
        this.user = login_component_1.LoginComponent.USER;
        this.showPasswordInput = !this.user || !this.user.password;
        this.alertInvalidUser = {
            title: "",
            message: "Valide os dados e tente novamente.",
            okButtonText: "OK"
        };
    }
    RegisterComponent.prototype.create = function () {
        var _this = this;
        if (!this.user.authenticationType) {
            this.user.authenticationType = "PLATFORM";
            this.user.externalId = this.randomExternalId();
        }
        this.user.authenticationType = this.user.authenticationType.toLocaleUpperCase();
        this.registerService.create(this.user).subscribe(function (response) {
            var user = response.json;
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }, function (error) {
            console.log(error);
            alert(_this.alertInvalidUser);
        });
    };
    RegisterComponent.prototype.mapUser = function (authenticationType, socialUser) {
        this.user = new user_1.User(authenticationType);
        this.user.externalId = socialUser.uid;
        this.user.email = socialUser.email;
        this.user.name = socialUser.name;
    };
    RegisterComponent.prototype.randomExternalId = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "Register",
            moduleId: module.id,
            templateUrl: "./register.component.html"
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService,
            router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0Qsc0NBQXFDO0FBR3JDLDREQUEwRDtBQVExRDtJQVVFLDJCQUNTLGVBQWdDLEVBQy9CLGdCQUFrQztRQURuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVhyQyxTQUFJLEdBQVMsZ0NBQWMsQ0FBQyxJQUFJLENBQUM7UUFDakMsc0JBQWlCLEdBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFOUQscUJBQWdCLEdBQVE7WUFDOUIsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFLQyxDQUFDO0lBRUcsa0NBQU0sR0FBYjtRQUFBLGlCQWlCQztRQWhCQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM5QyxVQUFBLFFBQVE7WUFDTixJQUFJLElBQUksR0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBTyxHQUFmLFVBQWdCLGtCQUEwQixFQUFFLFVBQWU7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFTyw0Q0FBZ0IsR0FBeEI7UUFDRSxNQUFNLENBQUMsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7WUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQS9DVSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7eUNBWTBCLGtDQUFlO1lBQ2IseUJBQWdCO09BWmpDLGlCQUFpQixDQWdEN0I7SUFBRCx3QkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlZ2lzdGVyU2VydmljZSB9IGZyb20gXCIuL3JlZ2lzdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL3VzZXJcIjtcblxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJSZWdpc3RlclwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQge1xuICBwdWJsaWMgdXNlcjogVXNlciA9IExvZ2luQ29tcG9uZW50LlVTRVI7XG4gIHB1YmxpYyBzaG93UGFzc3dvcmRJbnB1dDogYm9vbGVhbiA9ICF0aGlzLnVzZXIgfHwgIXRoaXMudXNlci5wYXNzd29yZDtcblxuICBwcml2YXRlIGFsZXJ0SW52YWxpZFVzZXI6IGFueSA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBtZXNzYWdlOiBcIlZhbGlkZSBvcyBkYWRvcyBlIHRlbnRlIG5vdmFtZW50ZS5cIixcbiAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWdpc3RlclNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXIuYXV0aGVudGljYXRpb25UeXBlKSB7XG4gICAgICB0aGlzLnVzZXIuYXV0aGVudGljYXRpb25UeXBlID0gXCJQTEFURk9STVwiO1xuICAgICAgdGhpcy51c2VyLmV4dGVybmFsSWQgPSB0aGlzLnJhbmRvbUV4dGVybmFsSWQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVzZXIuYXV0aGVudGljYXRpb25UeXBlID0gdGhpcy51c2VyLmF1dGhlbnRpY2F0aW9uVHlwZS50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHVzZXI6IGFueSA9IHJlc3BvbnNlLmpzb247XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGFsZXJ0KHRoaXMuYWxlcnRJbnZhbGlkVXNlcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwVXNlcihhdXRoZW50aWNhdGlvblR5cGU6IHN0cmluZywgc29jaWFsVXNlcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoYXV0aGVudGljYXRpb25UeXBlKTtcbiAgICB0aGlzLnVzZXIuZXh0ZXJuYWxJZCA9IHNvY2lhbFVzZXIudWlkO1xuICAgIHRoaXMudXNlci5lbWFpbCA9IHNvY2lhbFVzZXIuZW1haWw7XG4gICAgdGhpcy51c2VyLm5hbWUgPSBzb2NpYWxVc2VyLm5hbWU7XG4gIH1cblxuICBwcml2YXRlIHJhbmRvbUV4dGVybmFsSWQoKSB7XG4gICAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgdiA9IGMgPT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=