//Ce fichier TypeScript définit le composant ContactChildComponent. 
//Ce composant prend en entrée un objet contact de type Contact. 
//Il définit également une animation expandCollapse qui change l’état de collapsed à expanded lorsque l’utilisateur survole la carte de contact. 
//Lorsque l’utilisateur clique sur l’image de la carte de contact, la méthode showDetails() est appelée, qui ouvre un dialogue contenant 
//le composant ContactDetailComponent avec les détails du contact.
import { Component, Input, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../contact.service';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-child',
  templateUrl: './contact-child.component.html',
  styleUrls: ['./contact-child.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactChildComponent {
  @Input() contact?: Contact;
  state = 'collapsed';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.state = 'expanded';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.state = 'collapsed';
  }
  constructor(public dialog: MatDialog) { }
  showDetails() {
    this.dialog.open(ContactDetailComponent, {
      data: this.contact
    });

  }
}
