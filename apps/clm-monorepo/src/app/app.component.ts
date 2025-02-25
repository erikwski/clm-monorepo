import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@datacolor/libs/auth/data-access';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected router = inject(Router);
  protected authService = inject(AuthService);
  title = 'clm-monorepo';

  ngOnInit(): void {
      this.authService.getProtectedData();
  }

  nav(){
    this.router.navigate(['/cdo']);
  }
}
