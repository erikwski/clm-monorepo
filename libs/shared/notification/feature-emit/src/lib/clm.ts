import { NotificationPort } from './abstract';

export class ClmNotificationAdapter implements NotificationPort {
  notify(message: string): void {
    alert(message);
  }

  measurement(): number {
    throw new Error('Method not implemented.');
  }
}
