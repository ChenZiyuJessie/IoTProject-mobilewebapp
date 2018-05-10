import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController) {
  }



  signInUser() {
    console.log('Would sign in with', this.user.value, this.password.value)
  }

 

  register() {
    this.navCtrl.push(RegisterPage);
  }


}