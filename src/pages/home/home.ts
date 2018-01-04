import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private platform: Platform) {

  }

  nextPage(page): void {
    (page == 'SetRootPage') ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }

  pageName(): void {
   alert(this.navCtrl.getActive().name);
  }

  exitApp(): void {
    this.platform.exitApp();
  }

}
