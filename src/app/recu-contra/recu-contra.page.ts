import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recu-contra',
  templateUrl: './recu-contra.page.html',
  styleUrls: ['./recu-contra.page.scss'],
})
export class RecuContraPage {
  email: string = '';
  newPassword: string = '';
  private users: { email: string, password: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
  }

  recoverPassword() {
    const userIndex = this.users.findIndex(user => user.email === this.email);

    if (userIndex !== -1) {
      const newPassword = prompt('Introduce tu nueva contraseña:');
      if (newPassword) {
        this.users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(this.users));
        alert('Contraseña actualizada con éxito.');
        this.router.navigate(['/login']);
      }
    } else {
      alert('Correo no encontrado.');
    }
  }
}
