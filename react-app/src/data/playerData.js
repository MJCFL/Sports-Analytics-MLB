// Mock MLB player data for the player comparison tool
export const playerData = [
  {
    id: 1,
    name: "Aaron Judge",
    team: "NYY",
    position: "RF",
    age: 32,
    serviceTime: 8,
    war: 7.2,
    salary: 36.5, // in millions
    marketValue: 57.6, // in millions
    valueDiff: 21.1, // in millions
    contractYears: 8,
    isPitcher: false,
    battingStats: {
      avg: 0.294,
      obp: 0.422,
      slg: 0.613,
      ops: 1.035,
      hr: 45,
      rbi: 110,
      sb: 12,
      exitVelo: 95.8,
      launchAngle: 15.2,
      barrelPct: 22.4
    },
    defensiveStats: {
      drs: 5,
      oaa: 3
    },
    projectionStats: {
      warProjection: 6.8,
      uncertainty: 0.25
    }
  },
  {
    id: 2,
    name: "Juan Soto",
    team: "NYY",
    position: "LF",
    age: 26,
    serviceTime: 6,
    war: 6.8,
    salary: 31.0, // in millions
    marketValue: 54.4, // in millions
    valueDiff: 23.4, // in millions
    contractYears: 10,
    isPitcher: false,
    battingStats: {
      avg: 0.301,
      obp: 0.435,
      slg: 0.572,
      ops: 1.007,
      hr: 38,
      rbi: 95,
      sb: 8,
      exitVelo: 92.3,
      launchAngle: 12.8,
      barrelPct: 16.2
    },
    defensiveStats: {
      drs: -3,
      oaa: -2
    },
    projectionStats: {
      warProjection: 7.2,
      uncertainty: 0.20
    }
  },
  {
    id: 3,
    name: "Shohei Ohtani",
    team: "LAD",
    position: "DH",
    age: 30,
    serviceTime: 6,
    war: 8.5,
    salary: 45.0, // in millions
    marketValue: 68.0, // in millions
    valueDiff: 23.0, // in millions
    contractYears: 10,
    isPitcher: false, // Treating him as a batter for this example
    battingStats: {
      avg: 0.304,
      obp: 0.412,
      slg: 0.654,
      ops: 1.066,
      hr: 52,
      rbi: 120,
      sb: 20,
      exitVelo: 94.2,
      launchAngle: 14.5,
      barrelPct: 19.8
    },
    defensiveStats: {
      drs: 0,
      oaa: 0
    },
    projectionStats: {
      warProjection: 8.0,
      uncertainty: 0.30
    }
  },
  {
    id: 4,
    name: "Gerrit Cole",
    team: "NYY",
    position: "SP",
    age: 33,
    serviceTime: 10,
    war: 5.8,
    salary: 36.0, // in millions
    marketValue: 46.4, // in millions
    valueDiff: 10.4, // in millions
    contractYears: 5,
    isPitcher: true,
    pitchingStats: {
      era: 2.85,
      whip: 0.98,
      innings: 192,
      strikeouts: 237,
      walks: 45,
      wins: 15,
      losses: 6,
      fip: 2.92,
      kPer9: 11.1,
      bbPer9: 2.1,
      hrPer9: 0.8
    },
    projectionStats: {
      warProjection: 5.2,
      uncertainty: 0.35
    }
  },
  {
    id: 5,
    name: "Corbin Burnes",
    team: "BAL",
    position: "SP",
    age: 29,
    serviceTime: 5,
    war: 5.2,
    salary: 15.6, // in millions
    marketValue: 41.6, // in millions
    valueDiff: 26.0, // in millions
    contractYears: 1,
    isPitcher: true,
    pitchingStats: {
      era: 3.05,
      whip: 1.05,
      innings: 205,
      strikeouts: 220,
      walks: 52,
      wins: 14,
      losses: 8,
      fip: 3.12,
      kPer9: 9.7,
      bbPer9: 2.3,
      hrPer9: 0.7
    },
    projectionStats: {
      warProjection: 5.5,
      uncertainty: 0.25
    }
  },
  {
    id: 6,
    name: "Mookie Betts",
    team: "LAD",
    position: "2B/RF",
    age: 31,
    serviceTime: 10,
    war: 6.5,
    salary: 30.0, // in millions
    marketValue: 52.0, // in millions
    valueDiff: 22.0, // in millions
    contractYears: 6,
    isPitcher: false,
    battingStats: {
      avg: 0.310,
      obp: 0.405,
      slg: 0.585,
      ops: 0.990,
      hr: 32,
      rbi: 90,
      sb: 15,
      exitVelo: 91.5,
      launchAngle: 16.8,
      barrelPct: 14.5
    },
    defensiveStats: {
      drs: 8,
      oaa: 6
    },
    projectionStats: {
      warProjection: 6.0,
      uncertainty: 0.30
    }
  },
  {
    id: 7,
    name: "Vladimir Guerrero Jr.",
    team: "TOR",
    position: "1B",
    age: 26,
    serviceTime: 5,
    war: 4.8,
    salary: 19.5, // in millions
    marketValue: 38.4, // in millions
    valueDiff: 18.9, // in millions
    contractYears: 1,
    isPitcher: false,
    battingStats: {
      avg: 0.315,
      obp: 0.385,
      slg: 0.545,
      ops: 0.930,
      hr: 35,
      rbi: 105,
      sb: 3,
      exitVelo: 93.6,
      launchAngle: 10.5,
      barrelPct: 15.8
    },
    defensiveStats: {
      drs: 2,
      oaa: 0
    },
    projectionStats: {
      warProjection: 5.2,
      uncertainty: 0.25
    }
  },
  {
    id: 8,
    name: "Bobby Witt Jr.",
    team: "KCR",
    position: "SS",
    age: 24,
    serviceTime: 3,
    war: 6.2,
    salary: 7.0, // in millions
    marketValue: 49.6, // in millions
    valueDiff: 42.6, // in millions
    contractYears: 11,
    isPitcher: false,
    battingStats: {
      avg: 0.292,
      obp: 0.345,
      slg: 0.525,
      ops: 0.870,
      hr: 28,
      rbi: 85,
      sb: 35,
      exitVelo: 90.8,
      launchAngle: 12.2,
      barrelPct: 12.5
    },
    defensiveStats: {
      drs: 10,
      oaa: 8
    },
    projectionStats: {
      warProjection: 6.8,
      uncertainty: 0.22
    }
  },
  {
    id: 9,
    name: "Zack Wheeler",
    team: "PHI",
    position: "SP",
    age: 34,
    serviceTime: 10,
    war: 6.2,
    salary: 23.6, // in millions
    marketValue: 49.6, // in millions
    valueDiff: 26.0, // in millions
    contractYears: 5,
    isPitcher: true,
    pitchingStats: {
      era: 2.65,
      whip: 0.96,
      innings: 210,
      strikeouts: 225,
      walks: 40,
      wins: 16,
      losses: 7,
      fip: 2.78,
      kPer9: 9.6,
      bbPer9: 1.7,
      hrPer9: 0.6
    },
    projectionStats: {
      warProjection: 5.8,
      uncertainty: 0.30
    }
  },
  {
    id: 10,
    name: "Spencer Strider",
    team: "ATL",
    position: "SP",
    age: 25,
    serviceTime: 3,
    war: 5.6,
    salary: 8.0, // in millions
    marketValue: 44.8, // in millions
    valueDiff: 36.8, // in millions
    contractYears: 6,
    isPitcher: true,
    pitchingStats: {
      era: 3.05,
      whip: 1.02,
      innings: 185,
      strikeouts: 270,
      walks: 55,
      wins: 15,
      losses: 6,
      fip: 2.85,
      kPer9: 13.1,
      bbPer9: 2.7,
      hrPer9: 0.9
    },
    projectionStats: {
      warProjection: 6.0,
      uncertainty: 0.25
    }
  },
  {
    id: 11,
    name: "Tyler Glasnow",
    team: "LAD",
    position: "SP",
    age: 30,
    serviceTime: 7,
    war: 4.8,
    salary: 25.0, // in millions
    marketValue: 38.4, // in millions
    valueDiff: 13.4, // in millions
    contractYears: 4,
    isPitcher: true,
    pitchingStats: {
      era: 3.15,
      whip: 1.05,
      innings: 175,
      strikeouts: 230,
      walks: 50,
      wins: 12,
      losses: 7,
      fip: 3.05,
      kPer9: 11.8,
      bbPer9: 2.6,
      hrPer9: 1.0
    },
    projectionStats: {
      warProjection: 4.5,
      uncertainty: 0.35
    }
  },
  {
    id: 12,
    name: "Logan Webb",
    team: "SFG",
    position: "SP",
    age: 27,
    serviceTime: 5,
    war: 4.5,
    salary: 12.0, // in millions
    marketValue: 36.0, // in millions
    valueDiff: 24.0, // in millions
    contractYears: 5,
    isPitcher: true,
    pitchingStats: {
      era: 3.25,
      whip: 1.15,
      innings: 215,
      strikeouts: 180,
      walks: 45,
      wins: 14,
      losses: 9,
      fip: 3.40,
      kPer9: 7.5,
      bbPer9: 1.9,
      hrPer9: 0.7
    },
    projectionStats: {
      warProjection: 4.2,
      uncertainty: 0.25
    }
  },
  {
    id: 13,
    name: "Tarik Skubal",
    team: "DET",
    position: "SP",
    age: 27,
    serviceTime: 4,
    war: 5.4,
    salary: 2.65, // in millions
    marketValue: 43.2, // in millions
    valueDiff: 40.55, // in millions
    contractYears: 3,
    isPitcher: true,
    pitchingStats: {
      era: 2.80,
      whip: 0.94,
      innings: 190,
      strikeouts: 210,
      walks: 38,
      wins: 13,
      losses: 9,
      fip: 2.95,
      kPer9: 9.9,
      bbPer9: 1.8,
      hrPer9: 0.8
    },
    projectionStats: {
      warProjection: 5.6,
      uncertainty: 0.28
    }
  },
  {
    id: 14,
    name: "Luis Castillo",
    team: "SEA",
    position: "SP",
    age: 31,
    serviceTime: 7,
    war: 4.2,
    salary: 22.75, // in millions
    marketValue: 33.6, // in millions
    valueDiff: 10.85, // in millions
    contractYears: 5,
    isPitcher: true,
    pitchingStats: {
      era: 3.25,
      whip: 1.10,
      innings: 195,
      strikeouts: 205,
      walks: 60,
      wins: 13,
      losses: 8,
      fip: 3.35,
      kPer9: 9.5,
      bbPer9: 2.8,
      hrPer9: 0.9
    },
    projectionStats: {
      warProjection: 4.0,
      uncertainty: 0.30
    }
  },
  {
    id: 15,
    name: "Yoshinobu Yamamoto",
    team: "LAD",
    position: "SP",
    age: 25,
    serviceTime: 1,
    war: 4.0,
    salary: 27.0, // in millions
    marketValue: 32.0, // in millions
    valueDiff: 5.0, // in millions
    contractYears: 12,
    isPitcher: true,
    pitchingStats: {
      era: 3.40,
      whip: 1.12,
      innings: 170,
      strikeouts: 190,
      walks: 45,
      wins: 12,
      losses: 7,
      fip: 3.25,
      kPer9: 10.1,
      bbPer9: 2.4,
      hrPer9: 0.8
    },
    projectionStats: {
      warProjection: 4.5,
      uncertainty: 0.40
    }
  }
];
