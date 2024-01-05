import { Component, OnInit } from '@angular/core';
import { Episode, EPISODES } from '../models/episodes.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {
  episodes: Episode[] = EPISODES;

  constructor() { }

  ngOnInit() {
  }
}