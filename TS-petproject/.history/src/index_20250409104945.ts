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
// Class
// public, private acces modifiers
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

    private deleteToken() {
        console.log("Token deleted");
    }

    set courseCount(courseNum: number) { // setter can't have return type
      if (courseNum <= 1) {
        throw new Error("Course count should be more than 1");
      }
      this._courseCount = courseNum
    }
    
}

const hemil = new User("h@gmail.com", "hemil")
// hemil.city = "Bangalore"
