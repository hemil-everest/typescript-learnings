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

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User)
{
    console.log(user.name);
}

createUser({name:"Hemil", email:"hemil@gmail.com", isActive:true})