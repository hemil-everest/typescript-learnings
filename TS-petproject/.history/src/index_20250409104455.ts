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
    private _courseCount: number = 1
    readonly city: string = "Bangalore"
    constructor
    (
    public email: string, 
    public name: string, 
    // private userId: string
    ) {}
    get getAppleEmail(): string {
        return `apple@${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount;
    }
    
}

const hemil = new User("h@gmail.com", "hemil")
// hemil.city = "Bangalore"