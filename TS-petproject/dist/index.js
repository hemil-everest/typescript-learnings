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
// getter and setter
// Class better way below mentioned
// public, private acces modifiers
// protected modifier can let the inherited classes access the parent class variable and methods and properties
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bangalore";
    }
    get getAppleEmail() {
        return `apple@${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hemil = new User("h@gmail.com", "hemil");
// hemil.city = "Bangalore"
