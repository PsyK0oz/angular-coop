// // import {Pipe, PipeTransform} from '@angular/core';
// // import {MatIconRegistry} from '@angular/material/icon';
// // import {DomSanitizer} from '@angular/platform-browser';

// // @Pipe({
// //     name: 'userScore'
// // })
// // export class UserScorePipe implements PipeTransform {

// //     output: string = '';
// //     oldValue!: number;
    
// //     constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
// //         // Enregistrer les icônes Y et N
// //         iconRegistry.addSvgIcon('Y',sanitizer.bypassSecurityTrustResourceUrl('assets/Y.svg'));
// //         iconRegistry.addSvgIcon('N',sanitizer.bypassSecurityTrustResourceUrl('assets/rick_icon_BW.svg'));
// //     }
// //     transform(value: number): string {
// //         this.oldValue = value;
// //         for (let i = 0; i < 3; i++) {
// //             if (this.oldValue >= 1) {
// //                 this.output += `<mat-icon svgIcon="Y"></mat-icon>`;
// //                 this.oldValue--;
// //             } else if (this.oldValue <= 0) {
// //                 this.output += `<mat-icon svgIcon="N"></mat-icon>`;
// //             }
// //         }
// //         return this.output;
// //     }
// //     // transform(value: number): string {
// //     //     this.oldValue = value;
// //     //     for (let i = 0; i < 3; i++) {
// //     //         if (this.oldValue >= 1) {
// //     //             this.output += 'Y';
// //     //             this.oldValue--;
// //     //         } else if (this.oldValue <= 0) {
// //     //             this.output += 'N';
// //     //         }
// //     //     }
// //     //     return this.output;
// //     // }
// // }

// import {Pipe, PipeTransform} from '@angular/core';
// import {MatIconRegistry} from '@angular/material/icon';
// import {DomSanitizer} from '@angular/platform-browser';

// @Pipe({
//     name: 'userScore'
// })
// export class UserScorePipe implements PipeTransform {
//     output: string = '';
//     oldValue!: number;
//     constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
//         // Enregistrer les icônes Y et N
//         iconRegistry.addSvgIcon(
//             'Y',
//             sanitizer.bypassSecurityTrustResourceUrl('assets/rick_icon_BW.png'));
//         iconRegistry.addSvgIcon(
//             'N',
//             sanitizer.bypassSecurityTrustResourceUrl('assets/rick_icon_color.png'));
//     }
//     // transform(value: number): string {
//     //     this.oldValue = value;
//     //     for (let i = 0; i < 3; i++) {
//     //         if (this.oldValue >= 1) {
//     //             this.output += `<mat-icon svgIcon="Y"></mat-icon>`;
//     //             this.oldValue--;
//     //         } else if (this.oldValue <= 0) {
//     //             this.output += `<mat-icon svgIcon="N"></mat-icon>`;
//     //         }
//     //     }
//     //     return this.output;
//     // }
//     transform (value) {
//         value = value.substring (13, value.length-1);
//         var doc = new DOMParser ().parseFromString (value, "text/html");
//         const value123 = doc.documentElement.textContent;
//         // Créer un élément <i> avec le contenu de value123
//         let element = document.createElement('i');
//         element.innerHTML = value123;
//         return element;
//       }
      
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'userScore'})
export class UserScorePipe implements PipeTransform {
  transform(value: number, totalStars: number = 5): string {
    let stars = '';
    for(let i = 0; i < totalStars; i++) {
      if(i < value) {
        stars += '<img class="rickNoteImg rickColor img-fluid" src="assets/rick_icon_color.png"></img>'; // étoile claire (remplacez par le chemin de votre fichier d'étoile claire)
      } else {
        stars += '<img class="rickNoteImg rickBW img-fluid" src="assets/rick_icon_BW.png"></img>'; // étoile sombre (remplacez par le chemin de votre fichier d'étoile sombre)
      }
    }
    return stars;
  }
}