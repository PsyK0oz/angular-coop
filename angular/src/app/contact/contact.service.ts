// contact.service.ts
import { Injectable } from '@angular/core';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      name: 'Pierre-Luc',
      email: 'pierrelucoswald1@gmail.com',
      phone: '0123456789',
      image: 'assets/elipl.jpg'
    },
    {
      name: 'Elisée',
      email: 'email.de.votre.collègue@example.com',
      phone: '9876543210',
      image: 'assets/elipl.jpg'
    }
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }
}
