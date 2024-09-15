export class Drone {
  constructor(
    public id: string,
    public model: string,
    public status: string,
    public batteryLevel: number
  ) {

    if (Number(id) == 0) {
      batteryLevel = 100;
    }

  }
}
