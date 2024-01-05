export interface Episode {
    titre: string;
    saison: number;
    episode: number;
    episodeTotal: number; // numéro de l'épisode dans la série sans tenir compte des saisons
    audienceUSA: number; // audience en millions aux USA
}

export const EPISODES: Episode[] = [
    // Saison 1
    {titre: 'Pilot', saison: 1, episode: 1, episodeTotal: 1, audienceUSA: 1.10},
    {titre: 'Lawnmower Dog', saison: 1, episode: 2, episodeTotal: 2, audienceUSA: 1.51},
    {titre: 'Anatomy Park', saison: 1, episode: 3, episodeTotal: 3, audienceUSA: 1.30},
    {titre: 'M. Night Shaym-Aliens!', saison: 1, episode: 4, episodeTotal: 4, audienceUSA: 1.32},
    {titre: 'Meeseeks and Destroy', saison: 1, episode: 5, episodeTotal: 5, audienceUSA: 1.61},
    {titre: 'Rick Potion #9', saison: 1, episode: 6, episodeTotal: 6, audienceUSA: 1.75},
    {titre: 'Raising Gazorpazorp', saison: 1, episode: 7, episodeTotal: 7, audienceUSA: 1.76},
    {titre: 'Rixty Minutes', saison: 1, episode: 8, episodeTotal: 8, audienceUSA: 1.48},
    {titre: 'Something Ricked This Way Comes', saison: 1, episode: 9, episodeTotal: 9, audienceUSA: 1.64},
    {titre: 'Close Rick-counters of the Rick Kind', saison: 1, episode: 10, episodeTotal: 10, audienceUSA: 1.75},
    {titre: 'Ricksy Business', saison: 1, episode: 11, episodeTotal: 11, audienceUSA: 2.13},

    // Saison 2
    {titre: 'A Rickle in Time', saison: 2, episode: 1, episodeTotal: 12, audienceUSA: 2.12},
    {titre: 'Mortynight Run', saison: 2, episode: 2, episodeTotal: 13, audienceUSA: 2.18},
    {titre: 'Auto Erotic Assimilation', saison: 2, episode: 3, episodeTotal: 14, audienceUSA: 1.94},
    {titre: 'Total Rickall', saison: 2, episode: 4, episodeTotal: 15, audienceUSA: 1.96},
    {titre: 'Get Schwifty', saison: 2, episode: 5, episodeTotal: 16, audienceUSA: 2.12},
    {titre: 'The Ricks Must Be Crazy', saison: 2, episode: 6, episodeTotal: 17, audienceUSA: 1.91},
    {titre: 'Big Trouble in Little Sanchez', saison: 2, episode: 7, episodeTotal: 18, audienceUSA: 1.97},
    {titre: 'Interdimensional Cable 2: Tempting Fate', saison: 2, episode: 8, episodeTotal: 19, audienceUSA: 1.79},
    {titre: 'Look Who\'s Purging Now', saison: 2, episode: 9, episodeTotal: 20, audienceUSA: 1.89},
    {titre: 'The Wedding Squanchers', saison: 2, episode: 10, episodeTotal: 21, audienceUSA: 1.84},

    // Saison 3
    {titre: 'The Rickshank Rickdemption', saison: 3, episode: 1, episodeTotal: 22, audienceUSA: 0.68},
    {titre: 'Rickmancing the Stone', saison: 3, episode: 2, episodeTotal: 23, audienceUSA: 2.86},
    {titre: 'Pickle Rick', saison: 3, episode: 3, episodeTotal: 24, audienceUSA: 2.31},
    {titre: 'Vindicators 3: The Return of Worldender', saison: 3, episode: 4, episodeTotal: 25, audienceUSA: 2.66},
    {titre: 'The Whirly Dirly Conspiracy', saison: 3, episode: 5, episodeTotal: 26, audienceUSA: 2.29},
    {titre: 'Rest and Ricklaxation', saison: 3, episode: 6, episodeTotal: 27, audienceUSA: 2.47},
    {titre: 'The Ricklantis Mixup', saison: 3, episode: 7, episodeTotal: 28, audienceUSA: 2.38},
    {titre: 'Morty\'s Mind Blowers', saison: 3, episode: 8, episodeTotal: 29, audienceUSA: 2.51},
    {titre: 'The ABC\'s of Beth', saison: 3, episode: 9, episodeTotal: 30, audienceUSA: 2.49},
    {titre: 'The Rickchurian Mortydate', saison: 3, episode: 10, episodeTotal: 31, audienceUSA: 2.60},

    // Saison 4
    {titre: 'Edge of Tomorty: Rick, Die, Rickpeat', saison: 4, episode: 1, episodeTotal: 32, audienceUSA: 2.33},
    {titre: 'The Old Man and the Seat', saison: 4, episode: 2, episodeTotal: 33, audienceUSA: 1.67},
    {titre: 'One Crew Over the Crewcoo’s Morty', saison: 4, episode: 3, episodeTotal: 34, audienceUSA: 1.61},
    {titre: 'Claw and Hoarder: Special Ricktim\'s Morty', saison: 4, episode: 4, episodeTotal: 35, audienceUSA: 1.63},
    {titre: 'Rattlestar Ricklatica', saison: 4, episode: 5, episodeTotal: 36, audienceUSA: 1.32},
    {titre: 'Never Ricking Morty', saison: 4, episode: 6, episodeTotal: 37, audienceUSA: 1.55},
    {titre: 'Promortyus', saison: 4, episode: 7, episodeTotal: 38, audienceUSA: 1.34},
    {titre: 'The Vat of Acid Episode', saison: 4, episode: 8, episodeTotal: 39, audienceUSA: 1.26},
    {titre: 'Childrick of Mort', saison: 4, episode: 9, episodeTotal: 40, audienceUSA: 1.22},
    {titre: 'Star Mort Rickturn of the Jerri', saison: 4, episode: 10, episodeTotal: 41, audienceUSA: 1.30},

    // Saison 5
    {titre: 'Mort Dinner Rick Andre', saison: 5, episode: 1, episodeTotal: 42, audienceUSA: 1.30},
    {titre: 'Mortyplicity', saison: 5, episode: 2, episodeTotal: 43, audienceUSA: 1.16},
    {titre: 'A Rickconvenient Mort', saison: 5, episode: 3, episodeTotal: 44, audienceUSA: 1.01},
    {titre: 'Rickdependence Spray', saison: 5, episode: 4, episodeTotal: 45, audienceUSA: 0.96},
    {titre: 'Amortycan Grickfitti', saison: 5, episode: 5, episodeTotal: 46, audienceUSA: 0.78},
    {titre: 'Rick & Morty\'s Thanksploitation Spectacular', saison: 5, episode: 6, episodeTotal: 47, audienceUSA: 0.93},
    {titre: 'Gotron Jerrysis Rickvangelion', saison: 5, episode: 7, episodeTotal: 48, audienceUSA: 0.82},
    {titre: 'Rickternal Friendshine of the Spotless Mort', saison: 5, episode: 8, episodeTotal: 49, audienceUSA: 0.83},
    {titre: 'Forgetting Sarick Mortshall', saison: 5, episode: 9, episodeTotal: 50, audienceUSA: 0.91},
    {titre: 'Rickmurai Jack	', saison: 5, episode: 10, episodeTotal: 51, audienceUSA: 0.94},
];