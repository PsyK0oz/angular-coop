import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Episode, EPISODES } from '../../models/episodes.model';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})

export class ChartComponent {
  episodes: Episode[] = EPISODES;
  audiences: number[] = [];
  audienceMoyenneSaison: number[] = [];
  nbrEpisodeSaison: number[] = [];
  nbrSaison: number = 0;
  barChartLabels: string[] = [];

  constructor() {
    // Calculer le nombre de saisons
    for (let i = 0; i < this.episodes.length; i++) {
      if (this.episodes[i].saison > this.nbrSaison) {
        this.nbrSaison = this.episodes[i].saison;
        this.barChartLabels.push("S" + this.nbrSaison);
      }
    }
    for (let i = 0; i < this.nbrSaison; i++) {
      // Initialiser les tableaux
      this.audienceMoyenneSaison[i] = 0;
      this.nbrEpisodeSaison[i] = 0;
    }

    // Calculer le nombre moyen d'audience par saison
    for (let j = 0; j < this.episodes.length; j++) {
      let saisonIndex = this.episodes[j].saison - 1; // -1 car les saisons commencent à 1 mais les index de tableau commencent à 0
      this.audienceMoyenneSaison[saisonIndex] += this.episodes[j].audienceUSA;
      this.nbrEpisodeSaison[saisonIndex]++;
    }

    // Calculer la moyenne d'audience par saison
    for (let i = 0; i < this.audienceMoyenneSaison.length; i++) {
      this.audienceMoyenneSaison[i] = this.audienceMoyenneSaison[i] / this.nbrEpisodeSaison[i];
    }
  }

  // Variables pour le graphique
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  // Variable pour l'axe des abscisses du graphique
  barChartData: ChartDataset[] = [
    { data: this.audienceMoyenneSaison, label: 'Popularité moyenne de chaque saison (Audience US en million)' }
  ];
}
