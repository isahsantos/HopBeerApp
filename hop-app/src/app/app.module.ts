import { HopclubPage } from './../pages/hopclub/hopclub';
import { CuponsPage } from './../pages/cupons/cupons';
import { PerfilPage } from './../pages/perfil/perfil';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterPage } from '../pages/register/register';
import { environment } from '../environments/environments';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    SignupPage,
    LoginPage,
    RegisterPage,
    PerfilPage,
    CuponsPage,
    HopclubPage
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HopclubPage,
    SignupPage,
    LoginPage,
    RegisterPage,
    PerfilPage,
    CuponsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
