import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  viajes$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); // Almacén de datos reactivo

  constructor(private firestore: AngularFirestore, private navController: NavController) {}

  ngOnInit() {
    // Cargar los datos de la colección 'viajes' desde Firestore
    this.firestore
      .collection('viajes')
      .valueChanges()
      .pipe(
        catchError((error) => {
          console.error('Error al obtener los datos de Firestore:', error);
          return []; // Devuelve un array vacío en caso de error
        })
      )
      .subscribe((data) => {
        this.viajes$.next(data); // Actualiza los datos observables
      });
  }

  // Navegar a la página de detalles del viaje
  goToDetails(viaje: any) {
    console.log('Detalles del viaje seleccionado:', viaje);
    this.navController.navigateForward('/mapa', { state: { viaje } });
  }
}
