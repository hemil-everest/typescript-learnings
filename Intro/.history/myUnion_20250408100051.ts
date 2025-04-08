let score: number | string | boolean = 33;
score = 44;


type User2 = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}

let hemil: User2 | Admin = { name: "hemil", id: 1 }
hemil = { userName: "h", id: 2 }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else if (typeof id === "number") {
        console.log(id + 1)
    }
}

// array

const data: number[] | string[] = [1, 2, 3]
const data2: (number | string)[] = [1, 2, 3, "4"]
const data3: any[] = [1, 2, 3, "4"]
