// contact.service.ts
import { Injectable } from '@angular/core';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
  details: string;
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
      image: 'assets/elipl.jpg',
      details: 'test'
    },
    {
      name: 'Elisée',
      email: 'email.de.votre.collègue@example.com',
      phone: '9876543210',
      image: 'assets/elipl.jpg',
      details: 'test',
    }
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }
}
