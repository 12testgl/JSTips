export class Delivery {
  constructor(
    public id: string,
    public packageId: string,
    public droneId: string,
    public status: string,
    public eta: Date
  ) {}
}
