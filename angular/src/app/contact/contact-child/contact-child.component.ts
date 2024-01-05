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
