import { Component, AfterViewInit } from '@angular/core';

declare var google: any; 

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements AfterViewInit {

  map: any;  // Variable para almacenar el objeto mapa

  constructor() { }

  ngAfterViewInit() {
    this.loadMap();  
  }

  loadMap() {
    const mapOptions = {
      center: { lat: -33.4489, lng: -70.6693 }, // Ubicación inicial
      zoom: 15,
      mapTypeControl: false,  
      streetViewControl: false, 
      fullscreenControl: false,  
      zoomControl: false,  
      mapTypeId: 'roadmap',  
      styles: [ // Estilos 
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#424242"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    };

    // Crea el mapa con las opciones especificadas
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Añadir un marcador en el centro del mapa
    const marker = new google.maps.Marker({
      position: { lat: -33.4489, lng: -70.6693 },
      map: this.map,
      title: 'Tu ubicación'
    });
  }
}
