import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/core/shared/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: User = {
    email: '',
    password: '',
    token: ''
  };

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _messageService: MessageService
  ) { }

  ngOnInit() {

  }

  // Отправить данные пользователя на сервер, получить ответ, записать токен, отправить на страницу информации,
  // вывести сообщение
  loginUser() {
    this._loginService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/user/first']);
          this._messageService.showSnackbar('Добро пожаловать! :)', null, 3000);
        },
        err => {
          this._messageService.showSnackbar(err, null, 3000);
        }
      );
  }

}
