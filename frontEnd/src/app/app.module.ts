import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './appComponent/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './ComponentHero/hero-detail/hero-detail.component';
import { HeroesComponent } from './ComponentHero/heroes/heroes.component';
import { MessagesComponent } from './services/messages/messages.component';
import { ObjetToArray } from './services/pipe/objToArray';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './ComponentHero/hero-search/hero-search.component';
import { VistaAuthComponent } from './vista-auth/vista-auth.component';
import { environment } from '../environments/environment';
import { VistaRegistrarComponent } from './vista-registrar/vista-registrar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ObjetToArray,
    HeroSearchComponent,
    VistaAuthComponent,
    VistaRegistrarComponent,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
