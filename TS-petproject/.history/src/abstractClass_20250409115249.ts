// abstract class required method name it abstract, 
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number = 4
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

// object initialization not allowed for abstract class
const ht = new Instagram("test", "test", 3)