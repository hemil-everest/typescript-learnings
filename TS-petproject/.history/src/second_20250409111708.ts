interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}


class Instagram implements TakePhoto {
    constructor(public username: string,
        public cameraMode: string,
        public filter: string,
        public burst: number) { }
}