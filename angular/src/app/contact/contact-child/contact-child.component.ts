// contact-child.component.ts
import { Component, Input } from '@angular/core';

interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
}

@Component({
  selector: 'app-contact-child',
  templateUrl: './contact-child.component.html',
  styleUrls: ['./contact-child.component.scss']
})
export class ContactChildComponent {
  @Input() contact?: Contact;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
