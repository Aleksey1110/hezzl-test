import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { RemoteUser } from '../shared/remoteUser.model';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-second',
  templateUrl: './view-second.component.html',
  styleUrls: ['./view-second.component.css']
})
export class ViewSecondComponent implements OnInit {

  remoteUsers: RemoteUser[];
  choosenUser: RemoteUser;

  constructor(private _userServise: UserService) { }

  // Получить всех пользователей с сервера и записать в переменную
  ngOnInit() {
    this._userServise.getAllUsers().subscribe(data => this.remoteUsers = data);
  }

  // Получить информацию по одному пользователю через id
  passId(id: number): void {
    this._userServise.getUser(id).subscribe(data => this.choosenUser = data);
  }

}
