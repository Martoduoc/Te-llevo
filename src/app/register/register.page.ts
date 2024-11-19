import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerData = {
    email: '',
    password: ''
  };

  isLoading = false; // Estado de carga
  showPassword = false; // Control de visibilidad de la contraseña

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}

  async submitRegisterForm() {
    if (!this.registerData.email || !this.registerData.password) {
      this.showToast('Por favor, complete todos los campos');
      return;
    }

    this.isLoading = true;

    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.registerData.email,
        this.registerData.password
      );

      const uid = userCredential.user?.uid;

      if (uid) {
        this.router.navigate(['/logear']);
        this.saveUserToFirestore(uid);
        this.showToast('Usuario registrado con éxito.');
      } else {
        this.showToast('Error en el registro, intenta de nuevo');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      this.showToast('Hubo un problema al registrar al usuario. Intenta más tarde.');
    } finally {
      this.isLoading = false;
    }
  }

  private async saveUserToFirestore(uid: string) {
    try {
      await this.firestore.collection('usuarios').doc(uid).set({
        email: this.registerData.email,
        createdAt: new Date(),
      });
      console.log('Datos guardados en Firestore correctamente.');
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
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

  goBack() {
    this.location.back();
  }
}
