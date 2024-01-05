import { MatDialog } from '@angular/material/dialog';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  constructor(public dialog: MatDialog) {}


  // Fonction pour ouvrir la boite de dialogue (popup)
  openDialogue(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
}