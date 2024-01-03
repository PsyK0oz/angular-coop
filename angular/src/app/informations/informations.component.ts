// import { Component } from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { Component, TemplateRef } from '@angular/core';
// import { DialogContentComponent } from './dialog-content.component';


@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  constructor(public dialog: MatDialog) {}


  openDialogue(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
}