//Ce fichier TypeScript définit le composant ContactDetailComponent. 
//Ce composant prend en entrée un objet contact de type Contact via MAT_DIALOG_DATA. 
//Cela signifie que les données de contact sont passées à ce composant lorsqu’il est ouvert dans un dialogue Material.

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
})
export class ContactDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public contact: Contact) { }
}
