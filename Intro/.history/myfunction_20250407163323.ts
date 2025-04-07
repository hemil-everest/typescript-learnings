function addTwo(num: number) {
    return num + 2;
    // return "hello"
}

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     } return "200 OK"
// }

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {    // ...
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("h", "h@h.com")
signUpUser("joe", "joe@gmail.com", true);
getUpper("hello");
let aNum = addTwo(3);