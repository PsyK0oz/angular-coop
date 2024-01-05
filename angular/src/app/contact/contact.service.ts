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
  // Liste des contacts avec leurs informations 
  contacts: Contact[] = [
    {
      name: 'Pierre-Luc',
      email: 'pierrelucoswald1@gmail.com',
      phone: '+33 4 56 78 91 01',
      image: 'assets/elipl.jpg',
      details: 'Je m\'apelle Pierre-Luc (P-L pour les intimes (prononciation : [Pé èl])) et je suis grand fan de Rick et Morty,\
      j\'ai regardé chaque saison au moins 7 fois mais probablement plus, je ne sais plus. Oui ça fait peut être beaucoup \
      mais il faut savoir que je suis chômeur professionel, j\'ai donc tout le temps du monde pour apprécier chaque instant de \
      cette merveilleuse série plusieurs fois. D\'ailleurs ! Je ne vous ai pas encore dit mais mon personnage préféré est Rick, \
      je trouve qu\'il est très drôle et qu\'il a un humour très particulier. Un personage aussi décalé que moi ! Vous pouvez me \
      joindre à l\'adresse mail suivante :',
    },
    {
      name: 'Elisée',
      email: 'elisee.brand@gmail.com',
      phone: '+33 4 56 78 91 01',
      image: 'assets/elipl.jpg',
      details: 'Moi c\'est Élisée, j\'aime également beaucoup la série Rick et Morty. J\'ai regardé chaque saison mais pas autant que Pierre Luc. \
      Je ne comprend pas toutes les références mais cela ne me dérange pas je suis simplement là pour poser mon cerveau et rire un peu.\
      Mon personage préféré est également Rick, c\'est d\'ailleurs pour son côté décalé que Pé èl est mon ami. Je suis d\'ailleurs très heureux de \
      faire ce projet avec lui. Je vous souhaite une bonne visite sur notre site ! :)\
      Voici mes coordonnées :',
    }
  ];

  getContacts(): Contact[] { // Permet de récupérer les contacts
    return this.contacts;
  }
}
