import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closesidenav = new EventEmitter<void>();

  constructor(public loginService: LoginService) { }

  ngOnInit() {

  }

  // Разлогинить юзера
  onLogout(): void {
    this.loginService.logoutUser();
  }

  // Закрыть Side panel
  onClose(): void {
    this.closesidenav.emit();
  }

}
