import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
const firebaseAppconfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAnKY8PDoR7HYkJFZuo1dkFxhZk3jBjqmw",
  authDomain: "hopapplication-4c58e.firebaseapp.com",
  databaseURL: "https://hopapplication-4c58e.firebaseio.com",
  projectId: "hopapplication-4c58e",
  storageBucket: "hopapplication-4c58e.appspot.com",
  messagingSenderId: "961802428729"

}
@NgModule({
  declarations: [
    MyApp,
    ListPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppconfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
