/**
 * MLB Player Comparison Tool - Data Generator
 * 
 * This file generates realistic MLB player data for demonstration purposes.
 * In a production environment, this would be replaced with API calls to a backend service.
 */

// Generate player data
function generatePlayerData() {
    // Set random seed for reproducibility
    Math.seedrandom = function(seed) {
        let m = 0x80000000;
        let a = 1103515245;
        let c = 12345;
        let state = seed || Math.floor(Math.random() * (m - 1));
        
        return function() {
            state = (a * state + c) % m;
            return state / (m - 1);
        };
    };
    
    // Initialize with seed for consistent results
    const random = Math.seedrandom(42);
    
    // Player names - mix of real MLB stars and generated names
    const firstNames = ['Aaron', 'Shohei', 'Mike', 'Mookie', 'Juan', 'Bryce', 'Fernando', 'Freddie', 
                      'Francisco', 'Vladimir', 'Ronald', 'Corbin', 'Gerrit', 'Jacob', 'Shane', 
                      'Max', 'Justin', 'Nolan', 'Jose', 'Carlos', 'Yordan', 'Kyle', 'Zack', 'Luis',
                      'Alex', 'Anthony', 'Brandon', 'Chris', 'Daniel', 'Eric', 'Frank', 'George',
                      'Henry', 'Ian', 'James', 'Kevin', 'Luke', 'Matthew', 'Nathan', 'Oscar',
                      'Paul', 'Quincy', 'Robert', 'Steven', 'Tyler', 'Victor', 'William', 'Xavier'];
    
    const lastNames = ['Judge', 'Ohtani', 'Trout', 'Betts', 'Soto', 'Harper', 'Tatis Jr.', 'Freeman',
                     'Lindor', 'Guerrero Jr.', 'Acuña Jr.', 'Burnes', 'Cole', 'deGrom', 'Bieber',
                     'Scherzer', 'Verlander', 'Arenado', 'Ramirez', 'Correa', 'Alvarez', 'Tucker',
                     'Wheeler', 'Robert', 'Bregman', 'Rendon', 'Crawford', 'Sale', 'Murphy',
                     'Hosmer', 'Garcia', 'Springer', 'Ramirez', 'Happ', 'McClanahan', 'Gausman',
                     'Anderson', 'Chapman', 'Goldschmidt', 'Hernandez', 'Riley', 'Marte', 'Realmuto',
                     'Semien', 'Turner', 'Alcantara', 'Buxton', 'Bogaerts'];
    
    const teams = [
        { code: 'NYY', name: 'New York Yankees' },
        { code: 'LAD', name: 'Los Angeles Dodgers' },
        { code: 'BOS', name: 'Boston Red Sox' },
        { code: 'CHC', name: 'Chicago Cubs' },
        { code: 'HOU', name: 'Houston Astros' },
        { code: 'ATL', name: 'Atlanta Braves' },
        { code: 'NYM', name: 'New York Mets' },
        { code: 'PHI', name: 'Philadelphia Phillies' },
        { code: 'SDP', name: 'San Diego Padres' },
        { code: 'TOR', name: 'Toronto Blue Jays' },
        { code: 'SEA', name: 'Seattle Mariners' },
        { code: 'SFG', name: 'San Francisco Giants' },
        { code: 'STL', name: 'St. Louis Cardinals' },
        { code: 'CLE', name: 'Cleveland Guardians' },
        { code: 'MIL', name: 'Milwaukee Brewers' },
        { code: 'MIN', name: 'Minnesota Twins' },
        { code: 'TBR', name: 'Tampa Bay Rays' },
        { code: 'CIN', name: 'Cincinnati Reds' },
        { code: 'DET', name: 'Detroit Tigers' },
        { code: 'COL', name: 'Colorado Rockies' },
        { code: 'KCR', name: 'Kansas City Royals' },
        { code: 'OAK', name: 'Oakland Athletics' },
        { code: 'TEX', name: 'Texas Rangers' },
        { code: 'LAA', name: 'Los Angeles Angels' },
        { code: 'CHW', name: 'Chicago White Sox' },
        { code: 'ARI', name: 'Arizona Diamondbacks' },
        { code: 'BAL', name: 'Baltimore Orioles' },
        { code: 'MIA', name: 'Miami Marlins' },
        { code: 'PIT', name: 'Pittsburgh Pirates' },
        { code: 'WSH', name: 'Washington Nationals' }
    ];
    
    const positions = [
        { code: 'C', name: 'Catcher' },
        { code: '1B', name: 'First Base' },
        { code: '2B', name: 'Second Base' },
        { code: '3B', name: 'Third Base' },
        { code: 'SS', name: 'Shortstop' },
        { code: 'LF', name: 'Left Field' },
        { code: 'CF', name: 'Center Field' },
        { code: 'RF', name: 'Right Field' },
        { code: 'DH', name: 'Designated Hitter' },
        { code: 'SP', name: 'Starting Pitcher' },
        { code: 'RP', name: 'Relief Pitcher' }
    ];
    
    // Helper functions for random number generation
    function randomNormal(mean, stdDev) {
        const u1 = 1.0 - random();
        const u2 = 1.0 - random();
        const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
        return mean + stdDev * randStdNormal;
    }
    
    function randomChoice(array) {
        return array[Math.floor(random() * array.length)];
    }
    
    function randomInt(min, max) {
        return Math.floor(random() * (max - min + 1)) + min;
    }
    
    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
    
    // Generate player data
    const players = [];
    const n_players = 250;
    
    for (let i = 0; i < n_players; i++) {
        // Basic info
        const playerId = 1000 + i;
        const firstName = randomChoice(firstNames);
        const lastName = randomChoice(lastNames);
        const playerName = `${firstName} ${lastName}`;
        const team = randomChoice(teams);
        
        // Position weights to ensure realistic distribution
        const positionWeights = [0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.04, 0.20, 0.12];
        let positionIndex = 0;
        let cumulativeWeight = positionWeights[0];
        const r = random();
        
        while (r > cumulativeWeight && positionIndex < positionWeights.length - 1) {
            positionIndex++;
            cumulativeWeight += positionWeights[positionIndex];
        }
        
        const position = positions[positionIndex];
        
        const age = clamp(Math.round(randomNormal(28, 4)), 21, 40);
        
        // Service time (years in MLB)
        const serviceTime = clamp(Math.round(randomNormal(age - 23, 2)), 0, 20);
        
        // Performance metrics
        const isPitcher = position.code === 'SP' || position.code === 'RP';
        
        let playerData = {
            player_id: playerId,
            name: playerName,
            team: team.code,
            team_name: team.name,
            position: position.code,
            position_name: position.name,
            age: age,
            service_time: serviceTime
        };
        
        if (isPitcher) {
            // Pitcher stats
            const era = clamp(randomNormal(4.0, 1.0), 1.0, 7.0);
            const whip = clamp(randomNormal(1.3, 0.2), 0.8, 1.8);
            const innings = clamp(randomNormal(100, 50), 20, 220);
            const strikeouts = Math.round(innings * randomNormal(9.0, 2.0));
            const walks = Math.round(innings * randomNormal(3.0, 1.0));
            const wins = clamp(Math.round(randomNormal(8, 5)), 0, 25);
            const losses = clamp(Math.round(randomNormal(8, 4)), 0, 20);
            const saves = position.code === 'SP' ? 0 : clamp(Math.round(randomNormal(5, 10)), 0, 50);
            
            // Advanced metrics
            const fip = clamp(era * randomNormal(1.0, 0.15), 1.5, 6.0);
            const kPer9 = strikeouts / (innings / 9);
            const bbPer9 = walks / (innings / 9);
            const hrPer9 = clamp(randomNormal(1.2, 0.5), 0.1, 2.5);
            
            // WAR - better pitchers get higher WAR
            const baseWar = (5.0 - era) * (innings / 200) * randomNormal(1.0, 0.3);
            const war = clamp(baseWar, 0, 10);
            
            // Add pitcher stats to player data
            Object.assign(playerData, {
                war: war,
                era: era,
                whip: whip,
                innings: innings,
                strikeouts: strikeouts,
                walks: walks,
                wins: wins,
                losses: losses,
                saves: saves,
                fip: fip,
                k_per_9: kPer9,
                bb_per_9: bbPer9,
                hr_per_9: hrPer9
            });
        } else {
            // Batter stats
            const battingAvg = clamp(randomNormal(0.250, 0.030), 0.150, 0.350);
            const obp = battingAvg + clamp(randomNormal(0.070, 0.020), 0.020, 0.150);
            const slg = clamp(randomNormal(0.420, 0.080), 0.280, 0.650);
            const ops = obp + slg;
            
            // More stats based on position and player profile
            const powerHitter = slg > 0.500;
            const contactHitter = battingAvg > 0.280;
            const speedPlayer = ['CF', 'SS', '2B'].includes(position.code);
            
            const atBats = clamp(Math.round(randomNormal(500, 100)), 100, 650);
            const hits = Math.round(atBats * battingAvg);
            const homeRuns = Math.round(atBats * (powerHitter ? randomNormal(0.05, 0.02) : randomNormal(0.02, 0.01)));
            const rbis = clamp(Math.round(homeRuns * randomNormal(3.5, 0.5)), 10, 150);
            const stolenBases = clamp(Math.round(randomNormal(speedPlayer ? 30 : 8, 10)), 0, 60);
            
            // Advanced metrics
            const wrcPlus = clamp(Math.round(100 + (ops - 0.720) * 500), 40, 200);
            
            // WAR - better hitters get higher WAR, adjusted for position
            const positionAdjustment = {
                'C': 1.2, '1B': 0.8, '2B': 1.1, '3B': 1.0, 'SS': 1.2,
                'LF': 0.9, 'CF': 1.1, 'RF': 0.9, 'DH': 0.7
            };
            const baseWar = (wrcPlus - 100) / 20 * positionAdjustment[position.code];
            const war = clamp(baseWar * randomNormal(1.0, 0.3), 0, 12);
            
            // Statcast data
            const exitVelocity = clamp(randomNormal(88.5, 5.0), 80, 115);
            const launchAngle = randomNormal(12, 8);
            const sprintSpeed = clamp(randomNormal(27, 1.5), 23, 30);
            const barrelPct = clamp(randomNormal(8, 4), 0, 25);
            
            // Defensive metrics
            const defensiveRunsSaved = position.code !== 'DH' ? Math.round(randomNormal(0, 8)) : 0;
            const outsAboveAverage = position.code !== 'DH' ? Math.round(randomNormal(0, 5)) : 0;
            
            // Expected stats
            const xBa = clamp(battingAvg + randomNormal(0, 0.020), 0.150, 0.350);
            const xSlg = clamp(slg + randomNormal(0, 0.040), 0.280, 0.650);
            const xWoba = clamp((xBa + xSlg) / 3, 0.250, 0.450);
            
            // Add batter stats to player data
            Object.assign(playerData, {
                war: war,
                batting_avg: battingAvg,
                obp: obp,
                slg: slg,
                ops: ops,
                wrc_plus: wrcPlus,
                home_runs: homeRuns,
                rbis: rbis,
                stolen_bases: stolenBases,
                exit_velocity: exitVelocity,
                launch_angle: launchAngle,
                sprint_speed: sprintSpeed,
                barrel_pct: barrelPct,
                defensive_runs_saved: defensiveRunsSaved,
                outs_above_average: outsAboveAverage,
                x_ba: xBa,
                x_slg: xSlg,
                x_woba: xWoba
            });
        }
        
        // Salary based on performance and service time
        let salary;
        if (serviceTime < 3) {
            // Pre-arbitration (near league minimum)
            salary = randomNormal(720000, 50000);
        } else if (serviceTime < 6) {
            // Arbitration (scaled by performance and service time)
            const arbMultiplier = (serviceTime - 2) / 3;  // 0.33 to 1.33
            const perfMultiplier = playerData.war / 2;  // Performance factor
            salary = 720000 + (arbMultiplier * perfMultiplier * 5000000);
        } else {
            // Free agency (more closely tied to performance)
            if (playerData.war < 1) {
                salary = randomNormal(2000000, 500000);
            } else if (playerData.war < 3) {
                salary = randomNormal(8000000, 3000000);
            } else if (playerData.war < 5) {
                salary = randomNormal(15000000, 5000000);
            } else {
                salary = randomNormal(25000000, 8000000);
            }
        }
        
        // Add some randomness to salary
        salary = clamp(salary * randomNormal(1.0, 0.2), 720000, 50000000);
        
        // Contract details
        let contractYears = 1;
        if (serviceTime >= 6 && playerData.war > 2) {
            // Better free agents get longer contracts
            const maxYears = Math.min(10, Math.round(12 - (age - 25) / 2));
            contractYears = randomInt(1, maxYears);
        }
        
        // Injury risk
        const injuryRisk = clamp(randomNormal(0.5, 0.15), 0.1, 0.9);
        
        // Projection for next year
        let ageFactor = 1.0;
        if (age < 27) {
            // Young players tend to improve
            ageFactor = randomNormal(1.05, 0.05);
        } else if (age > 32) {
            // Older players tend to decline
            ageFactor = randomNormal(0.95, 0.05);
        }
        
        const warProjection = clamp(playerData.war * ageFactor * randomNormal(1.0, 0.2), 0, 12);
        
        // Projection uncertainty (higher for younger and older players)
        const projectionUncertainty = clamp(
            (age < 25 || age > 35) ? randomNormal(0.4, 0.1) : randomNormal(0.25, 0.05),
            0.1, 0.6
        );
        
        // Market value ($ per WAR)
        const dollarPerWar = randomNormal(8000000, 1000000);
        const marketValue = playerData.war * dollarPerWar;
        
        // Value differential (market value - salary)
        const valueDifferential = marketValue - salary;
        
        // Add financial and projection data
        Object.assign(playerData, {
            salary: salary,
            salary_formatted: formatCurrency(salary),
            contract_years: contractYears,
            war_projection: warProjection,
            projection_uncertainty: projectionUncertainty,
            market_value: marketValue,
            market_value_formatted: formatCurrency(marketValue),
            value_differential: valueDifferential,
            value_differential_formatted: formatCurrency(valueDifferential),
            injury_risk: injuryRisk,
            war_per_dollar: playerData.war / (salary / 1000000)
        });
        
        players.push(playerData);
    }
    
    return players;
}

// Helper function to format currency
function formatCurrency(value) {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
        return `$${(value / 1000).toFixed(2)}K`;
    } else {
        return `$${value.toFixed(2)}`;
    }
}

// Generate the player data
const playerData = generatePlayerData();

// Make it available globally
window.mlbPlayerData = playerData;
