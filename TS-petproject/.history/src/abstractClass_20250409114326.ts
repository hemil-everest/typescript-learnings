class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
      ) { }
}

class Instagram extends TakePhoto {
}


const ht = new TakePhoto("test", "test")