import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-set-root',
  templateUrl: 'set-root.html',
})
export class SetRootPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetRootPage');
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

}
