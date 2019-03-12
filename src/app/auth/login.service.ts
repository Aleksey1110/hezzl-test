import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private _http: HttpClient, private _router: Router) { }

  // Функция логина. Отправка введенных пользователем данных на сервер
  loginUser(user: User): Observable<User> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post<User>(this._loginUrl, user);
  }

  // Проверить наличие токена в локальном хранилище
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Удалить токен из локального хранилища. Перенаправить на домашнюю страницу
  logoutUser(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  // Получить токен из локального хранилища
  getToken(): string {
    return localStorage.getItem('token');
  }
}
