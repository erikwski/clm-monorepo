import { Component, inject } from '@angular/core';
import { AuthService } from '@datacolor/libs/auth/data-access';
import { FeatureTableDataContainer } from '@datacolor/shared/shared/feature-table-data';

@Component({
  standalone: true,
  imports: [FeatureTableDataContainer],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'color-hub';

  protected authService = inject(AuthService);

  ngOnInit() {
    this.authService.getProtectedData();
  }

}
