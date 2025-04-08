// const User = {
//     name: "hemil",
//     age: 27,
//     isActive: true,
// }

// function createUser({ name: string, isPaid: boolean }) { }
// let newUser = { name: "hemil", isPaid: false, email:"h@h.com" }

// createUser(newUser)

// function createCourse(): { name: string, isPaid: boolean } {
//     return {name: "reactjs", isPaid: false}
// }

// Aliases helps fix where createUser can use objects with more properties than the ones defined in the function
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User
// {
//     console.log(user.name);
//     return {name: "", email: "", isActive: false}
// }

// createUser({name:"Hemil", email:"hemil@gmail.com", isActive:true})

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: true;
    creditCardDetails?: number; // ? means optional
}

let myUser: User = {
    _id: "123",
    name: "hemil",
    email: "hemil@gmail.com",
    isActive: true
}

myUser.email = "h@gmail.com"
// myUser._id = "456" // error: cannot assign to '_id' because it is a read-only property

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

// type cardDetails = cardNumber & cardDate &{
//     cvv: number;
// } // intersection type // not advisable to user