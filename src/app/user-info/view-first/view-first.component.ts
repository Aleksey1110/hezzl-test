import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { RemoteUser } from '../shared/remoteUser.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-first',
  templateUrl: './view-first.component.html',
  styleUrls: ['./view-first.component.css']
})
export class ViewFirstComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['playerName', 'playerId', 'playerEmail', 'playerPhone', 'playerScore', 'playerCoins'];
  dataSource = new MatTableDataSource<RemoteUser>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _userService: UserService
  ) { }

  // Получить всех пользователей с сервера и записать в переменную
  ngOnInit() {
    this._userService.getAllUsers().subscribe(data => this.dataSource.data = data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Функция отсева пользователей через ввод данных
  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
