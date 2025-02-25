import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if(!authService.isLogged()) router.navigate(['/login']);
      if (error.status === 401) {
        // Call refresh token endpoint
        return authService.refreshToken().pipe(
          switchMap(() => {
            // Retry the original request with the new access token
            console.warn("Retrying request after refresh token");
            
            authService.isLogged.set(true);
            return next(req);
          }),
          catchError((err) => {
            // Handle refresh token failure (logout user, etc.)
            return throwError(() => err);
          })
        );
      }
      return throwError(() => {
        return error;
      });
    })
  );
};
