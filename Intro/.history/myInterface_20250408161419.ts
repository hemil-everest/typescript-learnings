interface User4{
    readonly dbId: number; // readonly means it cannot be changed
    email: string;
    userId: number;
    googleId?: string; // ? means optional
}

const hemilUser: User4 = {
    email:"", userId: 1, dbId: 123
}