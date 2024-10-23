import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any[] = [];

  constructor(private databaseService: DatabaseService) { }

  async ngOnInit() {
    await this.loadUsers(); // Cargar usuarios al iniciar la página
  }

  async loadUsers() {
    try {
      this.users = await this.databaseService.getAllUsers();
      console.log(this.users); // Mostrar usuarios en la consola
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }

}
