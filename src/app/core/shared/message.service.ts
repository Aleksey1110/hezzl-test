import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    // Показ сообщений в окне Snackbar
    showSnackbar(message, action, duration) {
        this.snackBar.open(message, action, { duration });
    }
}
