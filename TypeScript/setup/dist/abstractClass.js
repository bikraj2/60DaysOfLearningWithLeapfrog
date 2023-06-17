"use strict";
class TakePhoto {
    constructor(cameraMode, filter, busMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.busMode = busMode;
    }
    getReelTime() {
        return 10;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, busMode) {
        super(cameraMode, filter, busMode);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.busMode = busMode;
    }
    getSepia() {
        console.log('Sepia');
        console.log('====================================');
        console.log("Hey you can't change me");
        console.log('====================================');
    }
}
const hc = new Instagram('Portrait', 'Normal', 'Bus');
hc.getReelTime();
