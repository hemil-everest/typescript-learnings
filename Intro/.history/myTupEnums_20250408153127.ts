const User: (string | number)[] = ["John", 30];
let tUser: [string, number, boolean]

tUser = ["John", 30, true];

let rgb: [number, number, number] = [255, 255, 255]

type User3 = [number, string]

const newUser: User3 = [1, "hemil"]
newUser[0][1] = "abcd@gmail.com"
newUser.push(0,1)