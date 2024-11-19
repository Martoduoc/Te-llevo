import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map!: google.maps.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    const navyBlueStyles: google.maps.MapTypeStyle[] = [
      {
        elementType: 'geometry',
        stylers: [{ color: '#1b3b5a' }],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8ec3b9' }],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1a3646' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#406d80' }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#4b6878' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#64779e' }],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [{ color: '#1b3b5a' }],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{ color: '#023e58' }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#283d6a' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6f9ba5' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#304a7d' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#98a5be' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#2c6675' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b0d5ce' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#0e1626' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#4e6d70' }],
      },
    ];

    const mapOptions: google.maps.MapOptions = {
      center: { lat: -33.4489, lng: -70.6693 }, // Coordenadas de ejemplo (Santiago, Chile)
      zoom: 13,
      disableDefaultUI: true, // Ocultar los controles predeterminados
      styles: navyBlueStyles,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Ejemplo: Añadir un marcador en el centro del mapa
    new google.maps.Marker({
      position: { lat: -33.4489, lng: -70.6693 },
      map: this.map,
      title: 'Ubicación Central',
    });
  }
}
