// contact.component.ts
import { Component } from '@angular/core';
import { Contact, ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }
}
