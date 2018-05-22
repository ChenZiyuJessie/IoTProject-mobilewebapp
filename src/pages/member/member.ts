import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  
  username:String='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public restful:RestapiProvider) {
    this.restful.member().subscribe(
      data =>this.addName(data),
      error => this.navCtrl.push(HomePage)
    )
  }
  addName(data){
    this.username=data.username;
    console.log(data)
  }

  
  logout() {
    this.restful.logout()
      .subscribe(
        data => { console.log(data); this.navCtrl.push(HomePage)},
       error => console.error(error)
      );
  }
 }
  

  
