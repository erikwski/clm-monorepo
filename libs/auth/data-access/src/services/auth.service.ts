import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Your API endpoint
  public isLogged = signal(false);
  protected http = inject(HttpClient);


  register(username: string, password: string): void {
    this.http
      .post(`${this.apiUrl}/register`, {
        username,
        password,
      })
      .subscribe();
  }

  login(credentials: any): void {
    this.http
      .post(`${this.apiUrl}/login`, credentials, { withCredentials: true })
      .subscribe((response: any) => {
        if (response.status === 200) this.isLogged.set(true);
      });
  }

  refreshToken(): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}/refresh`, {}, { withCredentials: true })
      .pipe(
        catchError((error) => {
          // Handle error, e.g., log the user out
          console.error('Refresh token failed', error);
          // Optionally, redirect to login or handle as needed
          return throwError(error);
        })
      );
  }

  /**
   * Check login is working
   */
  getProtectedData() {
    this.http
      .get(`${this.apiUrl}/protected`, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        if (response.status === 200) this.isLogged.set(true);
      });
  }

  logout(): void {
    this.http
      .post(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .subscribe(() => {
        this.isLogged.set(false);
        this.getProtectedData()
      });
  }
}
