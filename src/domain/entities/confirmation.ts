export class Confirmation {
  constructor(
    public id: string,
    public deliveryId: string,
    public confirmedAt: Date
  ) {}
}
