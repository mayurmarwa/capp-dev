import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/*
  Generated class for the Backup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-backup',
  templateUrl: 'backup.html'
})
export class Backup {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackupPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
