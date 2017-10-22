"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_1 = require("../model/user");
var Rx_1 = require("rxjs/Rx");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.alertInvalidUser = {
            title: "",
            message: "E-mail ou senha inválidos.",
            okButtonText: "OK"
        };
    }
    LoginService.prototype.findByEmailAndPassword = function (password, email) {
        var _this = this;
        this.http
            .get(user_1.User.USER_API +
            "/search/findByEmailAndPassword?password=" +
            password +
            "&email=" +
            email)
            .subscribe(function (response) {
            var user = response.json;
            return user;
        }, function (error) {
            console.dir(error);
            alert(_this.alertInvalidUser);
            throw Rx_1.Observable.throw("Not found.");
        });
    };
    LoginService.prototype.findByExternalId = function (externalId) {
        return this.http
            .get(user_1.User.USER_API + "/search/findByExternalId?externalId=" + externalId);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsc0NBQXFDO0FBRXJDLHNDQUFxQztBQUNyQyw4QkFBcUM7QUFHckM7SUFTRSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOdEIscUJBQWdCLEdBQVE7WUFDOUIsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsNEJBQTRCO1lBQ3JDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFFK0IsQ0FBQztJQUUzQiw2Q0FBc0IsR0FBN0IsVUFBOEIsUUFBZ0IsRUFBRSxLQUFhO1FBQTdELGlCQW9CQztRQW5CQyxJQUFJLENBQUMsSUFBSTthQUNOLEdBQUcsQ0FDRixXQUFJLENBQUMsUUFBUTtZQUNYLDBDQUEwQztZQUMxQyxRQUFRO1lBQ1IsU0FBUztZQUNULEtBQUssQ0FDUjthQUNBLFNBQVMsQ0FDUixVQUFBLFFBQVE7WUFDTixJQUFJLElBQUksR0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0IsTUFBTSxlQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVNLHVDQUFnQixHQUF2QixVQUF3QixVQUFrQjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsV0FBSSxDQUFDLFFBQVEsR0FBRyxzQ0FBc0MsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBcENVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FVZSxXQUFJO09BVG5CLFlBQVksQ0FxQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL3VzZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgXG4gIHB1YmxpYyBzdGF0aWMgVVNFUl9JRDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwcml2YXRlIGFsZXJ0SW52YWxpZFVzZXI6IGFueSA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBtZXNzYWdlOiBcIkUtbWFpbCBvdSBzZW5oYSBpbnbDoWxpZG9zLlwiLFxuICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIHB1YmxpYyBmaW5kQnlFbWFpbEFuZFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBhbnkge1xuICAgIHRoaXMuaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgVXNlci5VU0VSX0FQSSArXG4gICAgICAgICAgXCIvc2VhcmNoL2ZpbmRCeUVtYWlsQW5kUGFzc3dvcmQ/cGFzc3dvcmQ9XCIgK1xuICAgICAgICAgIHBhc3N3b3JkICtcbiAgICAgICAgICBcIiZlbWFpbD1cIiArXG4gICAgICAgICAgZW1haWxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBsZXQgdXNlcjogYW55ID0gcmVzcG9uc2UuanNvbjtcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgICBhbGVydCh0aGlzLmFsZXJ0SW52YWxpZFVzZXIpO1xuICAgICAgICAgIHRocm93IE9ic2VydmFibGUudGhyb3coXCJOb3QgZm91bmQuXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGZpbmRCeUV4dGVybmFsSWQoZXh0ZXJuYWxJZDogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFVzZXIuVVNFUl9BUEkgKyBcIi9zZWFyY2gvZmluZEJ5RXh0ZXJuYWxJZD9leHRlcm5hbElkPVwiICsgZXh0ZXJuYWxJZCk7XG4gIH1cbn1cbiJdfQ==