import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HopclubPage } from './../hopclub/hopclub';
import { User } from './../../model/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm : FormGroup;
  public user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, public loadingCtrl: LoadingController,public formbuilder:FormBuilder) {
      let validateEmail = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.registerForm = this.formbuilder.group({
        name: ['', [Validators.required]],
        user: ['', [Validators.required]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(validateEmail)])],
        senha: ['', [Validators.required, Validators.minLength(8)]],
        celular: ['', [Validators.required, Validators.minLength(10)]],
        product: ['', [Validators.required]]

      })
  }

  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async register(user: User) {
    //2º
    let load = this.presentLoadingDefault();
    load.present();
    //end
    //Valida se foi informado email e passaword
    if (user.name == null || user.email == null || user.phone == null || user.phone == null || user.senha == null) {
      //3º
      load.dismiss();
      //end
      this.alert('Erro', 'Preencha todos os campos');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentLoadingDefault(): Loading {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere... '
    });
    return loading;
  }
  onSubmit(): void {
    console.log(this.registerForm.value)

  }

}
