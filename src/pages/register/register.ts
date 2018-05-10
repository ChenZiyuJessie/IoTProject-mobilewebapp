import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestapiProvider } from '../../providers/restapi/restapi';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    addMemberForm: FormGroup = new FormGroup({
      room: new FormControl(null, Validators.required),
      membername: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cpass: new FormControl(null, Validators.required)

    })
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public restful: RestapiProvider) { }
    
 

  registerMember(){
    if (!this.addMemberForm.valid || (this.addMemberForm.controls.password.value != this.addMemberForm.controls.cpass.value)) {
      console.log('Invalid Form'); return;
    }
      this.restful.register(JSON.stringify(this.addMemberForm.value))
      .subscribe(data => {console.log(data);this.navCtrl.push(HomePage);},
      error=>console.error(error)
      
      
  //console.log(JSON.stringify(this.addMemberForm.value));
  )
  }
}

