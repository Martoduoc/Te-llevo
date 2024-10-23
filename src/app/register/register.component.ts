import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    name: '',
    email: ''
  };

  constructor(private databaseService: DatabaseService) {}

  async onSubmit() {
    try {
      await this.databaseService.addUser(this.user.name, this.user.email);
      console.log('Usuario registrado:', this.user);
      // Limpiar el formulario o redirigir al usuario según sea necesario
      this.user = { name: '', email: '' }; // Limpia el formulario
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }
}
