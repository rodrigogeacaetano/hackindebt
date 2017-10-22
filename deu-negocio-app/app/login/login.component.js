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
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase
            .init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            // storageBucket: 'gs://al-grano.appspot.com'
            onAuthStateChanged: function (data) {
                // optional but useful to immediately re-logon the user when he re-visits your app
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    console.log("user's uid: " + (data.user.uid ? data.user.uid : "N/A"));
                    _this.loginService
                        .findByExternalId(data.user.uid)
                        .subscribe(function (response) {
                        _this.routerExtensions.navigate(["/home"], {
                            clearHistory: true
                        });
                    });
                }
            }
        })
            .then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
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
            _this.findByExternalId(firebase.LoginType.FACEBOOK.toString(), socialUser);
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
            _this.findByExternalId(firebase.LoginType.GOOGLE.toString(), socialUser);
        }, function (error) {
            console.log(error);
            alert(_this.alertErrorGoogle);
        });
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var email = this.email;
        var password = this.password;
        LoginComponent_1.USER = this.loginService.findByEmailAndPassword(password, email);
    };
    LoginComponent.prototype.onForgotPasswordTap = function () { };
    LoginComponent.prototype.findByExternalId = function (authenticationType, socialUser) {
        var _this = this;
        this.loginService.findByExternalId(socialUser.uid).subscribe(function (response) {
            var user = response.json;
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }, function (error) {
            console.log(error);
            _this.mapUser(authenticationType, socialUser);
            _this.routerExtensions.navigate(["/register"], { clearHistory: true });
        });
    };
    LoginComponent.prototype.mapUser = function (authenticationType, socialUser) {
        var user = new user_1.User(authenticationType);
        user.externalId = socialUser.uid;
        user.email = socialUser.email;
        user.name = socialUser.name;
        LoginComponent_1.USER = user;
    };
    LoginComponent = LoginComponent_1 = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
    var LoginComponent_1;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUErQztBQUMvQyxzREFBK0Q7QUFDL0Qsc0NBQXFDO0FBRXJDLHVEQUEwRDtBQU8xRDtJQWlCRSx3QkFDUyxZQUEwQixFQUN6QixnQkFBa0M7UUFEbkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJwQyx1QkFBa0IsR0FBUTtZQUNoQyxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSwyQ0FBMkM7WUFDcEQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUNNLHFCQUFnQixHQUFRO1lBQzlCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLHlDQUF5QztZQUNsRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO0lBS0MsQ0FBQzt1QkFwQk8sY0FBYztJQXNCbEIsaUNBQVEsR0FBZjtRQUFBLGlCQWlDQztRQWhDQyxRQUFRO2FBQ0wsSUFBSSxDQUFDO1lBQ0osa0ZBQWtGO1lBQ2xGLDZCQUE2QjtZQUM3Qiw2Q0FBNkM7WUFDN0Msa0JBQWtCLEVBQUUsVUFBQSxJQUFJO2dCQUN0QixrRkFBa0Y7Z0JBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FDckUsQ0FBQztnQkFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FDekQsQ0FBQztvQkFDRixLQUFJLENBQUMsWUFBWTt5QkFDZCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDL0IsU0FBUyxDQUFDLFVBQUEsUUFBUTt3QkFDakIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN4QyxZQUFZLEVBQUUsSUFBSTt5QkFDbkIsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFBLFFBQVE7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRU0scURBQTRCLEdBQW5DO1FBQUEsaUJBb0JDO1FBbkJDLFFBQVE7YUFDTCxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDO2FBQ3BEO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFBLFVBQVU7WUFDUixLQUFJLENBQUMsZ0JBQWdCLENBQ25CLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUN0QyxVQUFVLENBQ1gsQ0FBQztRQUNKLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFTSxtREFBMEIsR0FBakM7UUFBQSxpQkFpQkM7UUFoQkMsUUFBUTthQUNMLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU07U0FDaEMsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFBLFVBQVU7WUFDUixLQUFJLENBQUMsZ0JBQWdCLENBQ25CLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNwQyxVQUFVLENBQ1gsQ0FBQztRQUNKLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsZ0JBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FDNUQsUUFBUSxFQUNSLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVNLDRDQUFtQixHQUExQixjQUFvQyxDQUFDO0lBRTdCLHlDQUFnQixHQUF4QixVQUF5QixrQkFBMEIsRUFBRSxVQUFlO1FBQXBFLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUMxRCxVQUFBLFFBQVE7WUFDTixJQUFJLElBQUksR0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sZ0NBQU8sR0FBZixVQUFnQixrQkFBMEIsRUFBRSxVQUFlO1FBQ3pELElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDNUIsZ0JBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFqSVUsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzt5Q0FtQnVCLDRCQUFZO1lBQ1AseUJBQWdCO09BbkJqQyxjQUFjLENBa0kxQjtJQUFELHFCQUFDOztDQUFBLEFBbElELElBa0lDO0FBbElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWwvdXNlclwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBzdGF0aWMgVVNFUjogVXNlcjtcblxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhbGVydEVycm9yRmFjZWJvb2s6IGFueSA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBtZXNzYWdlOiBcIkhvdXZlIHVtIHByb2JsZW1hIGFvIGxvZ2FyIHBlbG8gRmFjZWJvb2suXCIsXG4gICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgfTtcbiAgcHJpdmF0ZSBhbGVydEVycm9yR29vZ2xlOiBhbnkgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJIb3V2ZSB1bSBwcm9ibGVtYSBhbyBsb2dhciBwZWxvIEdvb2dsZS5cIixcbiAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBmaXJlYmFzZVxuICAgICAgLmluaXQoe1xuICAgICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgICAgIC8vIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2FsLWdyYW5vLmFwcHNwb3QuY29tJ1xuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IGRhdGEgPT4ge1xuICAgICAgICAgIC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBcInVzZXIncyB1aWQ6IFwiICsgKGRhdGEudXNlci51aWQgPyBkYXRhLnVzZXIudWlkIDogXCJOL0FcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZVxuICAgICAgICAgICAgICAuZmluZEJ5RXh0ZXJuYWxJZChkYXRhLnVzZXIudWlkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvZ2luV2l0aEZhY2Vib29rQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGZpcmViYXNlXG4gICAgICAubG9naW4oe1xuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXG4gICAgICAgIGZhY2Vib29rT3B0aW9uczoge1xuICAgICAgICAgIHNjb3BlOiBbXCJwdWJsaWNfcHJvZmlsZVwiLCBcImVtYWlsXCIsIFwidXNlcl9hYm91dF9tZVwiXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIHNvY2lhbFVzZXIgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZEJ5RXh0ZXJuYWxJZChcbiAgICAgICAgICAgIGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSy50b1N0cmluZygpLFxuICAgICAgICAgICAgc29jaWFsVXNlclxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgYWxlcnQodGhpcy5hbGVydEVycm9yRmFjZWJvb2spO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIG9uTG9naW5XaXRoR29vZ2xlQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGZpcmViYXNlXG4gICAgICAubG9naW4oe1xuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIHNvY2lhbFVzZXIgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZEJ5RXh0ZXJuYWxJZChcbiAgICAgICAgICAgIGZpcmViYXNlLkxvZ2luVHlwZS5HT09HTEUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHNvY2lhbFVzZXJcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIGFsZXJ0KHRoaXMuYWxlcnRFcnJvckdvb2dsZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25TaWduaW5CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZDtcbiAgICBMb2dpbkNvbXBvbmVudC5VU0VSID0gdGhpcy5sb2dpblNlcnZpY2UuZmluZEJ5RW1haWxBbmRQYXNzd29yZChcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZW1haWxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uRm9yZ290UGFzc3dvcmRUYXAoKTogdm9pZCB7fVxuXG4gIHByaXZhdGUgZmluZEJ5RXh0ZXJuYWxJZChhdXRoZW50aWNhdGlvblR5cGU6IHN0cmluZywgc29jaWFsVXNlcjogYW55KSB7XG4gICAgdGhpcy5sb2dpblNlcnZpY2UuZmluZEJ5RXh0ZXJuYWxJZChzb2NpYWxVc2VyLnVpZCkuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgdXNlcjogYW55ID0gcmVzcG9uc2UuanNvbjtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhpcy5tYXBVc2VyKGF1dGhlbnRpY2F0aW9uVHlwZSwgc29jaWFsVXNlcik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG1hcFVzZXIoYXV0aGVudGljYXRpb25UeXBlOiBzdHJpbmcsIHNvY2lhbFVzZXI6IGFueSk6IHZvaWQge1xuICAgIGxldCB1c2VyID0gbmV3IFVzZXIoYXV0aGVudGljYXRpb25UeXBlKTtcbiAgICB1c2VyLmV4dGVybmFsSWQgPSBzb2NpYWxVc2VyLnVpZDtcbiAgICB1c2VyLmVtYWlsID0gc29jaWFsVXNlci5lbWFpbDtcbiAgICB1c2VyLm5hbWUgPSBzb2NpYWxVc2VyLm5hbWU7XG4gICAgTG9naW5Db21wb25lbnQuVVNFUiA9IHVzZXI7XG4gIH1cbn1cbiJdfQ==