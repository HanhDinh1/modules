export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logged out!!`);
    }
}
export function userHelper() {
    console.log("USER HELPER!");
}
