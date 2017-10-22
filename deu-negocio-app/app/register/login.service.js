"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("../app.component");
var Rx_1 = require("rxjs/Rx");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.userApi = app_component_1.AppComponent.DOMAIN + "/users";
        this.alertInvalidUser = {
            title: "",
            message: "E-mail ou senha inválidos.",
            okButtonText: "OK"
        };
        this.alertNotFound = {
            title: "",
            message: "Usuário não cadastrado.",
            okButtonText: "OK"
        };
    }
    LoginService_1 = LoginService;
    LoginService.prototype.isLoginAuthenticate = function () {
        if (!!LoginService_1.USER_ID) {
            this.http
                .get(this.userApi +
                "/search/findByExternalId?externalId=" +
                LoginService_1.USER_ID)
                .subscribe(function (response) {
                var user = response.json;
                LoginService_1.USER_ID = user.externalId;
                if (response.ok) {
                    return true;
                }
            });
        }
        return false;
    };
    LoginService.prototype.findByEmailAndPassword = function (password, email) {
        var _this = this;
        this.http
            .get(this.userApi +
            "/search/findByEmailAndPassword?password=" +
            password +
            "&email=" +
            email)
            .subscribe(function (response) {
            var user = response.json;
            LoginService_1.USER_ID = user.externalId;
            return user;
        }, function (error) {
            console.dir(error);
            alert(_this.alertInvalidUser);
            throw Rx_1.Observable.throw("Not found.");
        });
    };
    LoginService.prototype.findByExternalId = function (externalId) {
        var _this = this;
        this.http
            .get(this.userApi + "/search/findByExternalId?externalId=" + externalId)
            .subscribe(function (response) {
            var user = response.json;
            LoginService_1.USER_ID = user.externalId;
            return user;
        }, function (error) {
            alert(_this.alertNotFound);
            throw Rx_1.Observable.throw("Not found.");
        });
    };
    LoginService.prototype.create = function (user) {
        this.http.post(this.userApi, user);
    };
    LoginService = LoginService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
    var LoginService_1;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsc0NBQXFDO0FBQ3JDLGtEQUFnRDtBQUVoRCw4QkFBcUM7QUFHckM7SUFjRSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFadEIsWUFBTyxHQUFXLDRCQUFZLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUNqRCxxQkFBZ0IsR0FBUTtZQUM5QixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSw0QkFBNEI7WUFDckMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUNNLGtCQUFhLEdBQVE7WUFDM0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFFK0IsQ0FBQztxQkFkdkIsWUFBWTtJQWdCaEIsMENBQW1CLEdBQTFCO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJO2lCQUNOLEdBQUcsQ0FDRixJQUFJLENBQUMsT0FBTztnQkFDVixzQ0FBc0M7Z0JBQ3RDLGNBQVksQ0FBQyxPQUFPLENBQ3ZCO2lCQUNBLFNBQVMsQ0FBQyxVQUFBLFFBQVE7Z0JBQ2pCLElBQUksSUFBSSxHQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLGNBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sNkNBQXNCLEdBQTdCLFVBQThCLFFBQWdCLEVBQUUsS0FBYTtRQUE3RCxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLElBQUk7YUFDTixHQUFHLENBQ0YsSUFBSSxDQUFDLE9BQU87WUFDViwwQ0FBMEM7WUFDMUMsUUFBUTtZQUNSLFNBQVM7WUFDVCxLQUFLLENBQ1I7YUFDQSxTQUFTLENBQ1IsVUFBQSxRQUFRO1lBQ04sSUFBSSxJQUFJLEdBQVEsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixjQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3QixNQUFNLGVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLFVBQWtCO1FBQTFDLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUk7YUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQ0FBc0MsR0FBRyxVQUFVLENBQUM7YUFDdkUsU0FBUyxDQUNSLFVBQUEsUUFBUTtZQUNOLElBQUksSUFBSSxHQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsY0FBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQixNQUFNLGVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQVU7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBNUVVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FlZSxXQUFJO09BZG5CLFlBQVksQ0E2RXhCO0lBQUQsbUJBQUM7O0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbC91c2VyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgVVNFUl9JRDogc3RyaW5nO1xuICBwcml2YXRlIHVzZXJBcGk6IHN0cmluZyA9IEFwcENvbXBvbmVudC5ET01BSU4gKyBcIi91c2Vyc1wiO1xuICBwcml2YXRlIGFsZXJ0SW52YWxpZFVzZXI6IGFueSA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBtZXNzYWdlOiBcIkUtbWFpbCBvdSBzZW5oYSBpbnbDoWxpZG9zLlwiLFxuICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gIH07XG4gIHByaXZhdGUgYWxlcnROb3RGb3VuZDogYW55ID0ge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiVXN1w6FyaW8gbsOjbyBjYWRhc3RyYWRvLlwiLFxuICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIHB1YmxpYyBpc0xvZ2luQXV0aGVudGljYXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICghIUxvZ2luU2VydmljZS5VU0VSX0lEKSB7XG4gICAgICB0aGlzLmh0dHBcbiAgICAgICAgLmdldChcbiAgICAgICAgICB0aGlzLnVzZXJBcGkgK1xuICAgICAgICAgICAgXCIvc2VhcmNoL2ZpbmRCeUV4dGVybmFsSWQ/ZXh0ZXJuYWxJZD1cIiArXG4gICAgICAgICAgICBMb2dpblNlcnZpY2UuVVNFUl9JRFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCB1c2VyOiBhbnkgPSByZXNwb25zZS5qc29uO1xuICAgICAgICAgIExvZ2luU2VydmljZS5VU0VSX0lEID0gdXNlci5leHRlcm5hbElkO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGZpbmRCeUVtYWlsQW5kUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICB0aGlzLnVzZXJBcGkgK1xuICAgICAgICAgIFwiL3NlYXJjaC9maW5kQnlFbWFpbEFuZFBhc3N3b3JkP3Bhc3N3b3JkPVwiICtcbiAgICAgICAgICBwYXNzd29yZCArXG4gICAgICAgICAgXCImZW1haWw9XCIgK1xuICAgICAgICAgIGVtYWlsXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgbGV0IHVzZXI6IGFueSA9IHJlc3BvbnNlLmpzb247XG4gICAgICAgICAgTG9naW5TZXJ2aWNlLlVTRVJfSUQgPSB1c2VyLmV4dGVybmFsSWQ7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgYWxlcnQodGhpcy5hbGVydEludmFsaWRVc2VyKTtcbiAgICAgICAgICB0aHJvdyBPYnNlcnZhYmxlLnRocm93KFwiTm90IGZvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kQnlFeHRlcm5hbElkKGV4dGVybmFsSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMudXNlckFwaSArIFwiL3NlYXJjaC9maW5kQnlFeHRlcm5hbElkP2V4dGVybmFsSWQ9XCIgKyBleHRlcm5hbElkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCB1c2VyOiBhbnkgPSByZXNwb25zZS5qc29uO1xuICAgICAgICAgIExvZ2luU2VydmljZS5VU0VSX0lEID0gdXNlci5leHRlcm5hbElkO1xuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgYWxlcnQodGhpcy5hbGVydE5vdEZvdW5kKTtcbiAgICAgICAgICB0aHJvdyBPYnNlcnZhYmxlLnRocm93KFwiTm90IGZvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUodXNlcjogVXNlcikge1xuICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMudXNlckFwaSwgdXNlcik7XG4gIH1cbn1cbiJdfQ==