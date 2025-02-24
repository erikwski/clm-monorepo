import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'cdo',
    loadComponent: () =>
      import('@datacolor/apps/color-development-order').then(
        (r) =>  r.AppComponent
      ),
  },
];
