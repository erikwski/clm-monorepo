import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feature-login',
  templateUrl: './feature-login.container.html',
  styleUrl: './feature-login.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLoginContainer {}
