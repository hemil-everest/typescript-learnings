let score: number | string | boolean = 33;
score = 44;


type User2= {
    name: string;
    id: number;
}

type Admin= {
    userName: string;
    id: number;
}

let hemil: User2 | Admin = { name: "hemil", id: 1 }
hemil = {userName: "h", id: 2}  