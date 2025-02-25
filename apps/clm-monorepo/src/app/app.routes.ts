import { Route } from '@angular/router';
import { AuthGuard } from '@datacolor/libs/auth/data-access';
import { DashboardComponent } from './components/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@datacolor/libs/auth/feature-login').then(
        (r) => r.FeatureLoginContainer
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'cdo',
        pathMatch: 'full',
      },
      {
        path: 'cdo',
        loadComponent: () =>
          import('@datacolor/apps/color-development-order').then(
            (r) => r.AppComponent
          ),
      },
      {
        path: 'color-hub',
        loadComponent: () =>
          import('@datacolor/apps/color-hub').then((r) => r.AppComponent),
      },
      {
        path: 'color-standard-editor',
        loadComponent: () =>
          import('@datacolor/apps/color-standard-editor').then(
            (r) => r.AppComponent
          ),
      },
    ],
  },
];
