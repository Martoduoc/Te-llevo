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
    showPassword: boolean = false;

    private users: { email: string, password: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {

    const usersData = localStorage.getItem('users');
    if (usersData) {this.users = JSON.parse(usersData);}

  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log("Intentando iniciar sesión con:", this.email, this.password);
  
    if (this.email && this.password) {
      const user = this.users.find(u => u.email === this.email && u.password === this.password);
      console.log("Usuario encontrado:", user);
  
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/menu']);
        console.log("Redirigiendo a menú...");
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    } else {
      alert('Por favor, ingresa el correo y la contraseña.');
    }
  }
}