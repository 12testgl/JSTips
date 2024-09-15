import { Drone } from "../entities/drone";

export interface DroneRepository {
  save(drone: Drone): Promise<void>;
  findById(id: string): Promise<Drone | null>;
}
