import { Delivery } from '../entities/delivery';

export class DeliveryAggregate {
  constructor(
    public delivery: Delivery
  ) {}
}
