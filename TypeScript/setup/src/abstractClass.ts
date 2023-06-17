abstract class TakePhoto {
  constructor(
    public cameraMode: String,
    public filter: String,
    public busMode: String
  ) {}
  abstract getSepia(): void;
  getReelTime(): number {
    return 10;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: String,
    public filter: String,
    public busMode: String
  ) {
    super(cameraMode, filter, busMode);
  }
  getSepia(): void {
    console.log('Sepia');
    console.log('====================================');
    console.log("Hey you can't change me");
    console.log('====================================');
  }
}
const hc = new Instagram('Portrait', 'Normal', 'Bus');
hc.getReelTime();
