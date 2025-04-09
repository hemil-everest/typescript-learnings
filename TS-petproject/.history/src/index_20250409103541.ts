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
    
    readonly city: string = "Bangalore"
    constructor(public email: string, public name: string) {
    }
}

const hemil = new User("h@gmail.com", "hemil")
// hemil.city = "Bangalore"