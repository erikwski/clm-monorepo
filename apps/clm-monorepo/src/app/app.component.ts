import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected router = inject(Router)
  title = 'clm-monorepo';

  nav(){
    this.router.navigate(['/cdo']);
  }
}
