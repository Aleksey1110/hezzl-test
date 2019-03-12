import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public loginService: LoginService) { }

  ngOnInit() {

  }

  // Показать/спрятать Side panel
  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  // Разлогинить юзера
  onLogout(): void {
    this.loginService.logoutUser();
  }
}
