import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    email: string = '';
    password: string = '';

    private users: { email: string, password: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {

    const usersData = localStorage.getItem('users');
    if (usersData) {this.users = JSON.parse(usersData);}

  }


  login() {
    if (this.email && this.password) {

      const user = this.users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Navegar a la página de perfil
        this.router.navigate(['/menu']);
      } else {
        // Mostrar mensaje de error o alerta
        alert('Correo o contraseña incorrectos.');
      }
    }
  }
}