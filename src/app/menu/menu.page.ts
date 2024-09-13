import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  userName: string = '';  
  @ViewChild(IonModal, { static: false }) modal!: IonModal;  
  constructor() { }

  ngOnInit() {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      const currentUser = JSON.parse(currentUserData);
      this.userName = currentUser.name;  
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.dismiss();
    }
  }
}
