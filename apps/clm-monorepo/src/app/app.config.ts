import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  authErrorInterceptor,
  AuthService,
} from '@datacolor/libs/auth/data-access';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ClmNotificationAdapter, NotificationPort } from '@datacolor/shared/notification/feature-emit';

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideHttpClient(withInterceptors([authErrorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: NotificationPort, useClass: ClmNotificationAdapter },
  ],
};
