export class Notification {
  constructor(
    public id: string,
    public message: string,
    public recipientId: string,
    public sentAt: Date
  ) {}
}
