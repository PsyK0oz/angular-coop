import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarrouselComponent } from './accueil/carrousel/carrousel.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarrouselComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
