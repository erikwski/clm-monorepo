import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent
  },
//   {
//     path: 'cdo',
//     loadChildren: () =>
//       import('@web-matching/job-manager/feature-job-manager').then(
//         (r) => r.featurejobManagerRoutes
//     ),
//   },
];
