import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarrouselComponent } from './accueil/carrousel/carrousel.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InformationsComponent } from './informations/informations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ChartComponent } from './episodes/charts/charts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactChildComponent } from './contact/contact-child/contact-child.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';


import { UserScorePipe } from './shares/user-score.pipe';

import { MatDialogModule } from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarrouselComponent,
    ChartComponent,
    FormulaireComponent,
    ContactComponent,
    ContactChildComponent,
    ContactDetailComponent,
    InformationsComponent,
    UserScorePipe,
    EpisodesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HammerModule,
    NgChartsModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
