import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,) {

  }

  nextPage(page){
    (page == 'SetRootPage') ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }

  pageName(){
   alert(this.navCtrl.getActive().name);
  }

}
