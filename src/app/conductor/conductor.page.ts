import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {
  origen: string = '';
  destino: string = '';
  tarifa: number | null = null;
  detalles: string = '';

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private alertController: AlertController
  ) {}

  async crearViaje() {
    const viaje = {
      origen: this.origen,
      destino: this.destino,
      tarifa: this.tarifa,
      detalles: this.detalles,
      fecha: new Date(),
    };

    try {
      await this.firestore.collection('viajes').add(viaje);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'El viaje ha sido creado con éxito.',
        buttons: ['OK'],
      });
      await alert.present();

      await alert.onDidDismiss();
      this.router.navigate(['/menu']);
    } catch (error) {
      console.error('Error al crear el viaje:', error);
    }
  }
}
