let greetings: string = "Hello, world!";

//number
let myNum: number = 42;
myNum.toFixed()


//boolean
let isLoggedIn: boolean = false;


// any is not good practice as it breaks typechecking rule (noImplicit any flag)
let hero: string;
function getHero() {
    return "Thor";
}

hero = getHero();
greetings.toLowerCase();
console.log(greetings);