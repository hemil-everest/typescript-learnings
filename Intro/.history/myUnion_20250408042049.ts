let score: number | string | boolean = 33;
score = 44;


type User2= {
    name: string;
    id: number;
}

type Admin= {
    name: string | number;
    id: number;
}

let hemil: User2 | Admin = { name: "hemil", id: 1 }
hemil = {name: "h", id: 2}  