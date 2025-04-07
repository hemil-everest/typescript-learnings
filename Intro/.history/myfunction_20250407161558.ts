function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {    // ...
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("h", "h@h.com")
signUpUser("joe", "joe@gmail.com", true);
getUpper("hello");
addTwo(3);