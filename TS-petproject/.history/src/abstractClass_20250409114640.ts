abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSepia(): void
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}


const ht = new Instagram("test", "test")