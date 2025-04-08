const User = {
    name: "hemil",
    age: 27,
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: "hemil", isPaid: false, email:"h@h.com" })

function createCourse(): { name: string, isPaid: boolean } {
    return {name: "reactjs", isPaid: false}
}