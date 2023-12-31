import { NgModule } from '@angular/core';
import { BrowserModule,HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarrouselComponent } from './accueil/carrousel/carrousel.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactChildComponent } from './contact/contact-child/contact-child.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarrouselComponent,
    FormulaireComponent,
    ContactComponent,
    ContactChildComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
