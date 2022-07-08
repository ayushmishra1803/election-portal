import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private sankBar: MatSnackBar) {}
  showSnackBar(message: string, isSuccess: boolean) {
    this.sankBar.open(message, '', {
      duration: 3000,
      panelClass: [isSuccess ? 'success' : 'danger'],
    });
  }
}
