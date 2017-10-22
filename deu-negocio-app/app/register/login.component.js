"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require("nativescript-angular/router");
var user_1 = require("../model/user");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, routerExtensions) {
        this.loginService = loginService;
        this.routerExtensions = routerExtensions;
        this.alertErrorFacebook = {
            title: "",
            message: "Houve um problema ao logar pelo Facebook.",
            okButtonText: "OK"
        };
        this.alertErrorGoogle = {
            title: "",
            message: "Houve um problema ao logar pelo Google.",
            okButtonText: "OK"
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.loginService.isLoginAuthenticate()) {
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.onLoginWithFacebookButtonTap = function () {
        var _this = this;
        firebase
            .login({
            type: firebase.LoginType.FACEBOOK,
            facebookOptions: {
                scope: ["public_profile", "email", "user_about_me"]
            }
        })
            .then(function (socialUser) {
            _this.findByExternalId(socialUser.uid);
        }, function (error) {
            console.log(error);
            alert(_this.alertErrorFacebook);
        });
    };
    LoginComponent.prototype.onLoginWithGoogleButtonTap = function () {
        var _this = this;
        firebase
            .login({
            type: firebase.LoginType.GOOGLE
        })
            .then(function (socialUser) {
            _this.findByExternalId(socialUser.uid);
        }, function (error) {
            console.log(error);
            alert(_this.alertErrorGoogle);
        });
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var email = this.email;
        var password = this.password;
        this.user = this.loginService.findByEmailAndPassword(password, email);
    };
    LoginComponent.prototype.onForgotPasswordTap = function () { };
    LoginComponent.prototype.findByExternalId = function (uid) {
        var user = this.loginService.findByExternalId(uid);
        if (!!user) {
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.mapUser = function (authenticationType, socialUser) {
        this.user = new user_1.User(authenticationType);
        this.user.externalId = socialUser.uid;
        this.user.email = socialUser.email;
        this.user.name = socialUser.name;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUErQztBQUMvQyxzREFBK0Q7QUFDL0Qsc0NBQXFDO0FBRXJDLHVEQUEwRDtBQU8xRDtJQWVFLHdCQUNTLFlBQTBCLEVBQ3pCLGdCQUFrQztRQURuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBYnBDLHVCQUFrQixHQUFRO1lBQ2hDLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLDJDQUEyQztZQUNwRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO1FBQ00scUJBQWdCLEdBQVE7WUFDOUIsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUseUNBQXlDO1lBQ2xELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFLQyxDQUFDO0lBRUcsaUNBQVEsR0FBZjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNILENBQUM7SUFFTSxxREFBNEIsR0FBbkM7UUFBQSxpQkFpQkM7UUFoQkMsUUFBUTthQUNMLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUM7YUFDcEQ7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUNILFVBQUEsVUFBVTtZQUNSLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVNLG1EQUEwQixHQUFqQztRQUFBLGlCQWNDO1FBYkMsUUFBUTthQUNMLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU07U0FDaEMsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFBLFVBQVU7WUFDUixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sNENBQW1CLEdBQTFCLGNBQW9DLENBQUM7SUFFN0IseUNBQWdCLEdBQXhCLFVBQXlCLEdBQVc7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBQ08sZ0NBQU8sR0FBZixVQUFnQixrQkFBMEIsRUFBRSxVQUFlO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBaEZVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7eUNBaUJ1Qiw0QkFBWTtZQUNQLHlCQUFnQjtPQWpCakMsY0FBYyxDQWlGMUI7SUFBRCxxQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWwvdXNlclwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIHByaXZhdGUgYWxlcnRFcnJvckZhY2Vib29rOiBhbnkgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJIb3V2ZSB1bSBwcm9ibGVtYSBhbyBsb2dhciBwZWxvIEZhY2Vib29rLlwiLFxuICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gIH07XG4gIHByaXZhdGUgYWxlcnRFcnJvckdvb2dsZTogYW55ID0ge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiSG91dmUgdW0gcHJvYmxlbWEgYW8gbG9nYXIgcGVsbyBHb29nbGUuXCIsXG4gICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW5BdXRoZW50aWNhdGUoKSkge1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Mb2dpbldpdGhGYWNlYm9va0J1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBmaXJlYmFzZVxuICAgICAgLmxvZ2luKHtcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxuICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcbiAgICAgICAgICBzY29wZTogW1wicHVibGljX3Byb2ZpbGVcIiwgXCJlbWFpbFwiLCBcInVzZXJfYWJvdXRfbWVcIl1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBzb2NpYWxVc2VyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmRCeUV4dGVybmFsSWQoc29jaWFsVXNlci51aWQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIGFsZXJ0KHRoaXMuYWxlcnRFcnJvckZhY2Vib29rKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvZ2luV2l0aEdvb2dsZUJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBmaXJlYmFzZVxuICAgICAgLmxvZ2luKHtcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBzb2NpYWxVc2VyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmRCeUV4dGVybmFsSWQoc29jaWFsVXNlci51aWQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIGFsZXJ0KHRoaXMuYWxlcnRFcnJvckdvb2dsZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25TaWduaW5CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZDtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5maW5kQnlFbWFpbEFuZFBhc3N3b3JkKHBhc3N3b3JkLCBlbWFpbCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb3Jnb3RQYXNzd29yZFRhcCgpOiB2b2lkIHt9XG5cbiAgcHJpdmF0ZSBmaW5kQnlFeHRlcm5hbElkKHVpZDogc3RyaW5nKSB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5maW5kQnlFeHRlcm5hbElkKHVpZCk7XG4gICAgaWYgKCEhdXNlcikge1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBtYXBVc2VyKGF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nLCBzb2NpYWxVc2VyOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihhdXRoZW50aWNhdGlvblR5cGUpO1xuICAgIHRoaXMudXNlci5leHRlcm5hbElkID0gc29jaWFsVXNlci51aWQ7XG4gICAgdGhpcy51c2VyLmVtYWlsID0gc29jaWFsVXNlci5lbWFpbDtcbiAgICB0aGlzLnVzZXIubmFtZSA9IHNvY2lhbFVzZXIubmFtZTtcbiAgfVxufVxuIl19