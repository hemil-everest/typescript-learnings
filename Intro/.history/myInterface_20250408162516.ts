interface User4{
    readonly dbId: number; // readonly means it cannot be changed
    email: string;
    userId: number;
    googleId?: string; // ? means optional
    // startTrail: () => string
    startTrail(): string; // better way to define function in interface
    getCoupon(couponName: string, value: number): number; // function in interface
}   

const hemilUser: User4 = {
    email:"", userId: 1, dbId: 123,
    startTrail: () => {
        return "trail started"
    },
    getCoupon:(name: "hemil") => {
        return 10
    }
}
