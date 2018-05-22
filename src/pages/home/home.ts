import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RestapiProvider } from '../../providers/restapi/restapi';
import { MemberPage } from '../member/member';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  loginForm: FormGroup = new FormGroup({
    membername: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });


  constructor(public navCtrl: NavController,
              public restful:RestapiProvider) {
  }


  login(){
    if (!this.loginForm.valid) {
      console.log('Invalid'); return;
    }
    this.restful.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => { console.log(data); this.navCtrl.push(MemberPage)},
        error => console.error(error)
      )
  }
  
  

  register() {
    this.navCtrl.push(RegisterPage);
  }

}