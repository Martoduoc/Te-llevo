import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotFoundPage implements OnInit, OnDestroy {
  countdown: number = 5; // Número de segundos para la cuenta regresiva
  private intervalId: any; // Variable para almacenar el ID del intervalo

  constructor(private router: Router) {}

  ngOnInit() {
    this.startCountdown(); // Iniciar la cuenta regresiva al inicializar
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.countdown--; // Reducir el contador en 1 cada segundo
      if (this.countdown <= 0) {
        clearInterval(this.intervalId); // Limpiar el intervalo
        this.router.navigate(['/menu']); // Redirigir a la página deseada
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Limpiar el intervalo al destruir el componente
  }
}
