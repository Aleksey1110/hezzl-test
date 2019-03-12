import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  // Проверить залогинен ли пользователь
  canLoad(): boolean {
    if (this._loginService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
