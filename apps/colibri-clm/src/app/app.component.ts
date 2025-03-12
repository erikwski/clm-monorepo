import { Component, inject } from '@angular/core';
import { AuthService } from '@datacolor/libs/auth/data-access';
import { NotificationPort } from '@datacolor/shared/notification/feature-emit';
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
  protected notification = inject(NotificationPort);

  ngOnInit() {
    this.notification.notify('Hello from Colibri');
  }
}
