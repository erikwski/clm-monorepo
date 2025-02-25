import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DcuiNavigationBarModule } from '@datacolor/ui/navigation-bar';
import { AuthService } from '@datacolor/libs/auth/data-access';
import { DcuiButtonComponent } from '@datacolor/ui/button';
import { DcuiIconModule } from '@datacolor/ui/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DcuiNavigationBarModule, DcuiButtonComponent, DcuiIconModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  protected auth = inject(AuthService);
  ngOnInit() {
    this.auth.getProtectedData()
  }

  logout() {
    this.auth.logout();
  }

}
