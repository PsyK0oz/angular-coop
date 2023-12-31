// contact-child.component.ts
import { Component, Input, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Contact {
  name: string;
  email: string;
  phone: string;
  image: string;
}

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
}
