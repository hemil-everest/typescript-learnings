interface User4 {
    readonly dbId: number; // readonly means it cannot be changed
    email: string;
    userId: number;
    googleId?: string; // ? means optional
    // startTrail: () => string
    startTrail(): string; // better way to define function in interface
    getCoupon(couponName: string, value: number): number; // function in interface
}

interface User4 {
    githubtoken: string; // this will be added to the existing interface
}

interface Admin extends User4 {
    role: "admin" | "ta" | "learner"; // union type
}
const hemilUser: Admin = {
    email: "", userId: 1, dbId: 123,
    githubtoken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hemil", off: 10) => {
        return 10
    }
}
