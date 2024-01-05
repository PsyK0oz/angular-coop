import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'userScore'})
export class UserScorePipe implements PipeTransform {
  // Transforme un nombre en étoiles (ici représentées par des images de rick en couleur ou en noir et blanc)
  transform(value: number, totalStars: number = 5): string {
    let stars = '';
    for(let i = 0; i < totalStars; i++) {
      if(i < value) {
        // code HTML ajouté en fonction du score
        stars += '<img class="rickNoteImg rickColor img-fluid" src="assets/rick_icon_color.png"></img>'; 
      } else {
        stars += '<img class="rickNoteImg rickBW img-fluid" src="assets/rick_icon_BW.png"></img>';       }
    }
    return stars;
  }
}