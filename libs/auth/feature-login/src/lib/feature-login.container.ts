import { ChangeDetectionStrategy, Component, computed, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@datacolor/libs/auth/data-access';
import { DcuiButtonComponent } from '@datacolor/ui/button';
import { DcuiFieldComponent, DcuiLabelComponent } from '@datacolor/ui/field';
import { DcuiInputComponent } from '@datacolor/ui/input';

@Component({
  selector: 'feature-login',
  templateUrl: './feature-login.container.html',
  styleUrl: './feature-login.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DcuiInputComponent, DcuiButtonComponent, DcuiFieldComponent, DcuiLabelComponent, FormsModule],
})
export class FeatureLoginContainer {
  username = model('');
  password = model('');

  credentials = computed(() => {
    return {
      username: this.username(),
      password: this.password(),
    };
  });

  loginEffect = effect(()=>{
    if(this.authService.isLogged()) {
      this.router.navigate(['/dashboard']);
    }else {
      this.router.navigate(['/login']);
    }
  })

  protected authService = inject(AuthService);
  protected router = inject(Router);

  login() {
    this.authService.login(this.credentials())
  }
}
