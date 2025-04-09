"use strict";
// class User {
//     email: string
//     private name: string
//     readonly city: string = "Bangalore"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Bangalore";
    }
}
const hemil = new User("h@gmail.com", "hemil");
// hemil.city = "Bangalore"
