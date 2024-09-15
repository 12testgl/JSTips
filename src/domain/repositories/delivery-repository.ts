import { Delivery } from "../entities/delivery";

export interface DeliveryRepository {
  save(delivery: Delivery): Promise<void>;
  findById(id: string): Promise<Delivery | null>;
}
