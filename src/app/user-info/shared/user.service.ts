import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { RemoteUser } from './remoteUser.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private _url = 'http://localhost:3000/api/view';

    constructor(private _http: HttpClient) { }

    // Обработчик ошибок сервера
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Server error');
    }

    // Получить все данные с сервера
    getAllUsers(): Observable<RemoteUser[]> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.get<RemoteUser[]>(this._url)
            .pipe(catchError(this.errorHandler));
    }

    // Получить данные одного пользователя по id
    getUser(id: number): Observable<RemoteUser> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.getAllUsers().pipe(
            map(data => data.find(user => user.playerId === id)));
    }
}
