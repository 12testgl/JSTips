import { DroneRepository } from '../repositories/drone-repository';
import { Drone } from '../entities/drone';

export class DroneService {
  constructor(private droneRepository: DroneRepository) {}

  async createDrone(drone: Drone): Promise<void> {
    await this.droneRepository.save(drone);
  }
}
