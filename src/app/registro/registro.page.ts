import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  surname: string= '';
  name: string='';
  email: string = '';
  rut: string='';
  password: string = '';
  
  private users: { name: string, surname: string, rut: string, email: string, password: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Cargar usuarios desde el almacenamiento local si es necesario
    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
  }

  registerUser() {
    // Validar si los campos cumplen con los requisitos
    if (!this.email || !this.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validar formato del correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      alert('El correo debe tener el formato válido: ejemplo@ejemplo.ejemplo.');
      return;
    }

    // Validar formato de la contraseña
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordPattern.test(this.password)) {
      alert('La contraseña no cumple los requisitos');
      return;
    }

    // Añadir usuario a la lista y guardar en localStorage
    this.users.push({
      name: this.name,
      surname: this.surname,
      rut: this.rut,
      email: this.email,
      password: this.password,
    });

    // Guardar datos en localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(users);
    localStorage.setItem('users', JSON.stringify(this.users));
    

    // Navegar a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}