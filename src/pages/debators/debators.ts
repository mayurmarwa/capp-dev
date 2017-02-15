import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Debators page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.Platform
*/
@Component({
  selector: 'page-debators',
  templateUrl: 'debators.html'
})
export class Debators {
  debator: string = "mhr";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, platform: Platform) {
  	this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebatorsPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
