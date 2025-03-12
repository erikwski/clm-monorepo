import { NotificationPort } from './abstract';

export class ColibriNotificationAdapter implements NotificationPort {
  notify(message: string): void {
    console.log(`Notification: ${message}`);
  }
  
   measurement(): number {
      return 0; // should be colibri common
  }
}
    