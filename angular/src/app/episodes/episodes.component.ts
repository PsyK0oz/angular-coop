import { Component } from '@angular/core';
import { Episode, EPISODES } from '../models/episodes.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {
  // Récuperation du tableau avec les épisodes
  episodes: Episode[] = EPISODES;
}