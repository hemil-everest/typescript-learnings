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

const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "ironman", "spiderman"];
// const heroes = [1, 2, 3]; // number[]
heroes.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errMessage: string): void{
    console.log(errMessage);

}

function handleError(errMessage: string): void{
    throw new Error(errMessage);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("h", "h@h.com")
signUpUser("joe", "joe@gmail.com", true);
getUpper("hello");
let aNum = addTwo(3);