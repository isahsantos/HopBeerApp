import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    let validateEmail = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(validateEmail)])],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      product: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    console.log("Submit")
  }


}
