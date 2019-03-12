import { Component, OnInit } from '@angular/core';
import { RemoteUser } from '../shared/remoteUser.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-view-third',
  templateUrl: './view-third.component.html',
  styleUrls: ['./view-third.component.css']
})
export class ViewThirdComponent implements OnInit {

  remoteUsers: RemoteUser[];
  choosenUser: RemoteUser;

  constructor(private _userServise: UserService) { }

  // Получить всех пользователей с сервера и записать в переменную
  ngOnInit() {
    this._userServise.getAllUsers().subscribe(data => this.remoteUsers = data);
  }
}
