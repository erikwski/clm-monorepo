import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { NotificationPort, ColibriNotificationAdapter } from '@datacolor/shared/notification/feature-emit';
import { authErrorInterceptor, AuthService } from '@datacolor/libs/auth/data-access';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideHttpClient(withInterceptors([authErrorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: NotificationPort, useClass: ColibriNotificationAdapter },
  ],
};
