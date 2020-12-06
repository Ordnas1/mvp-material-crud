import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

// firebase related modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Core services
import { FirebaseService } from './core/firebase/firebase.service';
import { RootStoreModule } from './core/store';

// debug
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
