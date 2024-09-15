import { DeliveryRepository } from '../repositories/delivery-repository';
import { Delivery } from '../entities/delivery';

export class DeliveryService {
  constructor(private deliveryRepository: DeliveryRepository) {}

  async createDelivery(delivery: Delivery): Promise<void> {
    await this.deliveryRepository.save(delivery);
  }
}
