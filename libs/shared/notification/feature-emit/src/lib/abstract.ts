export abstract class NotificationPort {
  abstract notify(message: string): void;
  abstract measurement(): number;
}
