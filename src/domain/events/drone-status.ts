export class DroneStatus {
  constructor(
    public droneId: string,
    public status: string,
    public updatedAt: Date
  ) {}
}
