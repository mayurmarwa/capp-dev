import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { Working } from '../working/working';
import { HistoryPage } from '../history/history';
import { Messages } from '../messages/messages';
import { Backup } from '../backup/backup';
import { Debators } from '../debators/debators';

/*
  Generated class for the ClientOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-client-overview',
  templateUrl: 'client-overview.html'
})
export class ClientOverview {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientOverviewPage');
  }

  workingPage() {
  	this.navCtrl.setRoot(Working);
  }

  history() {Debators
    this.navCtrl.setRoot(HistoryPage);
  }

  messages() {
    this.navCtrl.setRoot(Messages);
  }

  backup() {
    this.navCtrl.setRoot(Backup);
  }

  debators(){
    this.navCtrl.setRoot(Debators);
  }

}
