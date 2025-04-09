class User {
    email:string
    name:string
    city:string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const hemil = new User("h@gmail.com","hemil")
hemil.city = "Bangalore"