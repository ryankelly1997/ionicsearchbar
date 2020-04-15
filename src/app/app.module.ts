import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp({
    apiKey: "AIzaSyCgEE_TkQCNubUbRnIyzDy74Tcq1baj3s4",
    authDomain: "testagain-6834c.firebaseapp.com",
    databaseURL: "https://testagain-6834c.firebaseio.com",
    projectId: "testagain-6834c",
    storageBucket: "testagain-6834c.appspot.com",
    messagingSenderId: "531384045944",
    appId: "1:531384045944:web:e448f05a93e29ad181788d",
    measurementId: "G-9XFCLRGH9E"
  }),
AngularFirestoreModule],
  providers: [
    StatusBar,
   
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
