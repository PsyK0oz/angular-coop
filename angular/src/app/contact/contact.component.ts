// contact.component.ts
import { Component } from '@angular/core';

interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[] = [
    {
      name: 'Votre nom',
      email: 'votre.email@example.com',
      phone: '0123456789',
      image: 'chemin/vers/votre/image.jpg'
    },
    {
      name: 'Nom de votre collègue',
      email: 'email.de.votre.collègue@example.com',
      phone: '9876543210',
      image: 'chemin/vers/l/image/de/votre/collègue.jpg'
    }
  ];
}
