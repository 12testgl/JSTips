export class DeliveryRescheduled {
  constructor(
    public deliveryId: string,
    public newETA: Date,
    public updatedAt: Date
  ) {}
}
