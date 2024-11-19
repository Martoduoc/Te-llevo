import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logear',
  templateUrl: './logear.page.html',
  styleUrls: ['./logear.page.scss'],
})
export class LogearPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false; // Control para mostrar/ocultar la contraseña
  isLoading: boolean = false; // Control para el spinner de carga

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  async login() {
    this.isLoading = true; // Activar el spinner de carga

    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.showToast('Inicio de sesión exitoso');
      this.router.navigate(['/menu']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.showToast('Error al iniciar sesión');
    } finally {
      this.isLoading = false; // Desactivar el spinner de carga
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Alterna la visibilidad de la contraseña
  }

  goBack() {
    this.router.navigate(['/home']); // Redirige a la página anterior
  }
}
