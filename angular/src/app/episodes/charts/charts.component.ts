import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { Episode, EPISODES } from '../../models/episodes.model';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})

export class ChartComponent {
  // episodes: Episode[] = EPISODES;
  // audiences: number[] = [];
  // audienceMoyenneSaison: number[] = [];
  // nbrEpisodeSaison: number[] = [];
  // constructor() {
  //   for (let i = 0; i < this.episodes.length; i++) {
  //     // calculer le nombre moyen d'audience par saison
  //     for (let j = 0; j < this.episodes.length; j++) {
  //       if (this.episodes[i].saison === this.episodes[j].saison) {
  //         this.audienceMoyenneSaison[i] += this.episodes[j].audienceUSA;
  //         this.nbrEpisodeSaison[i]++;
  //       }
  //     }

  //     this.audiences.push(this.episodes[i].audienceUSA);
  //     this.audienceMoyenneSaison.push(this.episodes[i].saison);
  //   }
  //   for (let i = 0; i < this.audienceMoyenneSaison.length; i++) {
  //     this.audienceMoyenneSaison[i] = this.audienceMoyenneSaison[i] / this.nbrEpisodeSaison[i];
  //   }
  // }

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: string[] = ['S1', 'S2', 'S3', 'S4'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataset[] = [
  //   { data: this.audienceMoyenneSaison, label: 'Popularité moyenne des saisons' }
  // ];


//   episodes: Episode[] = EPISODES;
// audiences: number[] = [];
// audienceMoyenneSaison: number[] = [];
// nbrEpisodeSaison: number[] = [];

// constructor() {
//   for (let i = 0; i < 5; i++) {
//     // Initialiser les tableaux
//     this.audienceMoyenneSaison[i] = 0;
//     this.nbrEpisodeSaison[i] = 0;

//     // Calculer le nombre moyen d'audience par saison
//     for (let j = 0; j < this.episodes.length; j++) {
//       if (this.episodes[i].saison === this.episodes[j].saison) {
//         this.audienceMoyenneSaison[i] += this.episodes[j].audienceUSA;
//         console.log("this.audienceMoyenneSaison[" + i + "] = " + this.audienceMoyenneSaison[i]);
//         this.nbrEpisodeSaison[i]++;
//         console.log("this.nbrEpisodeSaison[" + i + "] = " + this.nbrEpisodeSaison[i]);
//       }
//     }

//     this.audiences.push(this.episodes[i].audienceUSA);
//   }

//   for (let i = 0; i < this.audienceMoyenneSaison.length; i++) {
//     this.audienceMoyenneSaison[i] = this.audienceMoyenneSaison[i] / this.nbrEpisodeSaison[i];
//   }
// }

// barChartOptions: ChartOptions = {
//   responsive: true,
// };
// barChartLabels: string[] = ['S1', 'S2', 'S3', 'S4'];
// barChartType: ChartType = 'bar';
// barChartLegend = true;
// barChartPlugins = [];

// barChartData: ChartDataset[] = [
//   { data: this.audienceMoyenneSaison, label: 'Popularité moyenne des saisons' }
// ];
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

  for (let i = 0; i < this.audienceMoyenneSaison.length; i++) {
    this.audienceMoyenneSaison[i] = this.audienceMoyenneSaison[i] / this.nbrEpisodeSaison[i];
  }
}

barChartOptions: ChartOptions = {
  responsive: true,
};
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataset[] = [
  { data: this.audienceMoyenneSaison, label: 'Popularité moyenne de chaque saison (Audience US en million)' }
];
}
