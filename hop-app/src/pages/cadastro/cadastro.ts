import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from './../login/login';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { RegisterPage } from '../register/register';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'CadastroPage',
  segment: 'hop-club',
  defaultHistory: ['HomePage']

})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  onSignup() : void {
    this.navCtrl.push(LoginPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onRegister() : void {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


}
