"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_1 = require("../model/user");
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.create = function (user) {
        return this.http.post(user_1.User.USER_API, user);
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsc0NBQXFDO0FBR3JDLHNDQUFxQztBQUlyQztJQUNFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFM0IsZ0NBQU0sR0FBYixVQUFjLElBQVU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUxVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLGVBQWUsQ0FNM0I7SUFBRCxzQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL3VzZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGUodXNlcjogVXNlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVzZXIuVVNFUl9BUEksIHVzZXIpO1xuICB9XG59XG4iXX0=