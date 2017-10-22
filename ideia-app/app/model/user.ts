/**
 * User model from Firebase API.
 */
export class User {

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