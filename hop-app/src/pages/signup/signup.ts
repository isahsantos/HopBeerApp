import { HopclubPage } from './../hopclub/hopclub';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';
import { auth } from 'firebase/app';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Seja Bem Vindo ao Hop Club',
      subTitle: 'Bem vindo ao Hop Club, você agora recebe vantagens exclusivas em nosso restaurante',
      buttons: ['OK']
    });
    alert.present();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public afAuth:AngularFireAuth,private alertCtrl: AlertController) {
    let validateEmail = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(validateEmail)])],
      senha: ['', [Validators.required, Validators.minLength(10)]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      product: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    console.log("Submit")
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.signupForm.value.email,
      this.signupForm.value.senha).then((response=>{
        console.log("User created")
        this.presentAlert(),
        this.navCtrl.push(HopclubPage)
      })).catch((error)=>{
        console.log("Deu ruim",error)
      })
  }


}
