import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent {

  static DOMAIN: string = "http://192.168.88.101:8080";
  
  ngOnInit() {
    firebase
      .init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        // storageBucket: 'gs://al-grano.appspot.com'
        onAuthStateChanged: function(data) {
          // optional but useful to immediately re-logon the user when he re-visits your app
          console.log(
            data.loggedIn ? "Logged in to firebase" : "Logged out from firebase"
          );
          if (data.loggedIn) {
            console.log(
              "user's email address: " +
                (data.user.email ? data.user.email : "N/A")
            );
          }
        }
      })
      .then(
        instance => {
          console.log("firebase.init done");
        },
        error => {
          console.log("firebase.init error: " + error);
        }
      );
  }
}
