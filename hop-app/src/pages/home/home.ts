import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { CuponsPage } from '../cupons/cupons';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

hopclub() : void {
  this.navCtrl.push('CadastroPage');
}
hopcupon():void {
  this.navCtrl.push(CuponsPage);
 }

}
