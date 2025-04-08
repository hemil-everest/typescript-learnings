const User: (string | number)[] = ["John", 30];
let tUser: [string, number, boolean]

tUser = ["John", 30, true];

let rgb: [number, number, number] = [255, 255, 255]

type User3 = [number, string]

const newUser: User3 = [1, "hemil"]
newUser[1] = "abcd@gmail.com"
newUser.push(2) // error: Property 'push' does not exist on type '[number, string]'. // push is not allowed in tuple
// newUser.push(true) fixed here // newUser[0] = true // error: Type 'true' is not assignable to type 'number'.