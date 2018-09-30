import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  logout(){
    this.app.getRootNav().setRoot(LoginPage);

  }
}
