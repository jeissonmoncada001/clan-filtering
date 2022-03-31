export interface IClans {
  tag: string;
  name: string;
  type: string;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  warLeague: {
    id: number;
    name: string;
  };
  members: number;
  labels: [
    {
      id: number;
      name: string;
      iconUrls: {
        small: string;
        medium: string;
      };
    },
    {
      id: number;
      name: string;
      iconUrls: {
        small: string;
        medium: string;
      };
    },
    {
      id: number;
      name: string;
      iconUrls: {
        small: string;
        medium: string;
      };
    }
  ];
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
}
