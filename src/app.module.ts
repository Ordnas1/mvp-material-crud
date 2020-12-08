// Boilerplate & environment
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

// Firebase related modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Core services
import { FirebaseService } from './core/firebase/firebase.service';
import { RootStoreModule } from './core/store';

// Sharedb modules
import { MaterialModule } from 'src/shared/material/material.module';

// Debug
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
