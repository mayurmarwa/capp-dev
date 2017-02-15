import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { Dashboard } from '../dashboard/dashboard';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  goHomePage() {
  	//this.app.getRootNav().setRoot(TabsPage);
    this.app.getRootNav().setRoot(Dashboard);
  }
}
