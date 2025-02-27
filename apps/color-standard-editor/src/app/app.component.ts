import { Component } from '@angular/core';
import { FeatureTableDataContainer } from '@datacolor/shared/shared/feature-table-data';

@Component({
  standalone: true,
  imports: [FeatureTableDataContainer],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'color-standard-editor';
}
