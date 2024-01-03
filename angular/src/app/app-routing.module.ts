import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { InformationsComponent } from './informations/informations.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' }, // Route d'accueil
  { path: 'formulaire', component: FormulaireComponent }, // Route du formulaire
  { path: 'contact', component: ContactComponent },
  { path: 'informations', component: InformationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
