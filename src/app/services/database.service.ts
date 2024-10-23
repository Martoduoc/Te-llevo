import { Injectable } from '@angular/core';
import { SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { CapacitorSQLite } from '@capacitor-community/sqlite';

declare global {
  interface Window {
    SQLitePlugin: any; 
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db: SQLiteConnection;
  private dbConnection: SQLiteDBConnection | undefined;

  constructor() {
    this.db = new SQLiteConnection(CapacitorSQLite);
  }

  async createConnection(): Promise<void> {
    // Esperar a que jeep-sqlite esté disponible
    await new Promise<void>((resolve) => {
      const checkReady = () => {
        if (window.SQLitePlugin) {
          resolve();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    });

    // Crear la conexión a la base de datos
    this.dbConnection = await this.db.createConnection('mydb.db', false, 'no-encryption', 1, false);
    console.log('Conexión a la base de datos creada');
    await this.dbConnection.open();

    await this.dbConnection.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');
  }

  async open(): Promise<SQLiteDBConnection> {
    if (!this.dbConnection) {
      await this.createConnection();
    }
    return this.dbConnection!;
  }

  async execute(query: string, params: any[] = []): Promise<any> {
    const db = await this.open();
    try {
      const result = await db.run(query, params);
      return result;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      throw error;
    }
  }

  async getUsers(): Promise<any[]> {
    const db = await this.open();
    const result = await db.query('SELECT * FROM users');
    return result.values || []; 
  }

  async addUser(name: string, email: string): Promise<void> {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    await this.execute(query, [name, email]);
  }

  async getAllUsers() {
    const query = 'SELECT * FROM users';
    const result = await this.execute(query);
    return result.values; 
}


  async close(): Promise<void> {
    if (this.dbConnection) {
      await this.dbConnection.close();
      this.dbConnection = undefined; 
    }
  }
}
