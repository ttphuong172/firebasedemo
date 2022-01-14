import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
