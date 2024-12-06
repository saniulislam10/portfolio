import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isCollapsed = false;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
