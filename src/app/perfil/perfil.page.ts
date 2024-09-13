import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any = {};

  constructor() { }

  ngOnInit() {
    
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        this.user = JSON.parse(currentUser);
      }
  }
}
