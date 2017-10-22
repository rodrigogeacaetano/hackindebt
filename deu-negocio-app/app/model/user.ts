import { AppComponent } from "../app.component";

/**
 * User model.
 */
export class User {
    
    public static USER_API = "http://192.168.88.101:8080/users";

    externalId: string;
    email: string;
    name: string;
    nationalId: string;
    password: string;
    authenticationType: string;

    constructor(authenticationType: string) {
        this.authenticationType = authenticationType;
    }
}