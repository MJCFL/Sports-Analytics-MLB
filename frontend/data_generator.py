import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

def generate_player_data(n_players=250):
    """
    Generate mock MLB player data for demonstration purposes.
    """
    # Set random seed for reproducibility
    np.random.seed(42)
    
    # Player names - mix of real MLB stars and generated names
    first_names = ['Aaron', 'Shohei', 'Mike', 'Mookie', 'Juan', 'Bryce', 'Fernando', 'Freddie', 
                  'Francisco', 'Vladimir', 'Ronald', 'Corbin', 'Gerrit', 'Jacob', 'Shane', 
                  'Max', 'Justin', 'Nolan', 'Jose', 'Carlos', 'Yordan', 'Kyle', 'Zack', 'Luis',
                  'Alex', 'Anthony', 'Brandon', 'Chris', 'Daniel', 'Eric', 'Frank', 'George',
                  'Henry', 'Ian', 'James', 'Kevin', 'Luke', 'Matthew', 'Nathan', 'Oscar',
                  'Paul', 'Quincy', 'Robert', 'Steven', 'Tyler', 'Victor', 'William', 'Xavier']
    
    last_names = ['Judge', 'Ohtani', 'Trout', 'Betts', 'Soto', 'Harper', 'Tatis Jr.', 'Freeman',
                 'Lindor', 'Guerrero Jr.', 'Acuña Jr.', 'Burnes', 'Cole', 'deGrom', 'Bieber',
                 'Scherzer', 'Verlander', 'Arenado', 'Ramirez', 'Correa', 'Alvarez', 'Tucker',
                 'Wheeler', 'Robert', 'Bregman', 'Rendon', 'Crawford', 'Sale', 'Murphy',
                 'Hosmer', 'Garcia', 'Springer', 'Ramirez', 'Happ', 'McClanahan', 'Gausman',
                 'Anderson', 'Chapman', 'Goldschmidt', 'Hernandez', 'Riley', 'Marte', 'Realmuto',
                 'Semien', 'Turner', 'Alcantara', 'Buxton', 'Bogaerts']
    
    teams = ['NYY', 'LAD', 'BOS', 'CHC', 'HOU', 'ATL', 'NYM', 'PHI', 'SDP', 'TOR', 
             'SEA', 'SFG', 'STL', 'CLE', 'MIL', 'MIN', 'TBR', 'CIN', 'DET', 'COL',
             'KCR', 'OAK', 'TEX', 'LAA', 'CHW', 'ARI', 'BAL', 'MIA', 'PIT', 'WSH']
    
    positions = ['C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF', 'DH', 'SP', 'RP']
    position_weights = [0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.04, 0.20, 0.12]
    
    # Generate player data
    data = []
    
    for i in range(n_players):
        # Basic info
        player_id = 1000 + i
        first_name = np.random.choice(first_names)
        last_name = np.random.choice(last_names)
        player_name = f"{first_name} {last_name}"
        team = np.random.choice(teams)
        position = np.random.choice(positions, p=position_weights)
        age = int(np.random.normal(28, 4))
        age = max(21, min(40, age))  # Constrain age to realistic range
        
        # Service time (years in MLB)
        service_time = max(0, min(20, int(np.random.normal(age - 23, 2))))
        
        # Performance metrics
        is_pitcher = position in ['SP', 'RP']
        
        if is_pitcher:
            # Pitcher stats
            era = max(1.0, min(7.0, np.random.normal(4.0, 1.0)))
            whip = max(0.8, min(1.8, np.random.normal(1.3, 0.2)))
            innings = max(20, min(220, np.random.normal(100, 50)))
            strikeouts = int(innings * np.random.normal(9.0, 2.0))
            walks = int(innings * np.random.normal(3.0, 1.0))
            wins = int(max(0, min(25, np.random.normal(8, 5))))
            losses = int(max(0, min(20, np.random.normal(8, 4))))
            saves = 0 if position == 'SP' else int(max(0, min(50, np.random.normal(5, 10))))
            
            # Advanced metrics
            fip = max(1.5, min(6.0, era * np.random.normal(1.0, 0.15)))
            k_per_9 = strikeouts / (innings / 9)
            bb_per_9 = walks / (innings / 9)
            hr_per_9 = max(0.1, min(2.5, np.random.normal(1.2, 0.5)))
            
            # WAR - better pitchers get higher WAR
            base_war = (5.0 - era) * (innings / 200) * np.random.normal(1.0, 0.3)
            war = max(0, min(10, base_war))
            
            # Set batting stats to NaN for pitchers
            batting_avg = np.nan
            obp = np.nan
            slg = np.nan
            ops = np.nan
            wrc_plus = np.nan
            home_runs = np.nan
            rbis = np.nan
            stolen_bases = np.nan
            
        else:
            # Batter stats
            batting_avg = max(0.150, min(0.350, np.random.normal(0.250, 0.030)))
            obp = batting_avg + max(0.020, min(0.150, np.random.normal(0.070, 0.020)))
            slg = max(0.280, min(0.650, np.random.normal(0.420, 0.080)))
            ops = obp + slg
            
            # More stats based on position and player profile
            power_hitter = slg > 0.500
            contact_hitter = batting_avg > 0.280
            speed_player = position in ['CF', 'SS', '2B']
            
            at_bats = int(max(100, min(650, np.random.normal(500, 100))))
            hits = int(at_bats * batting_avg)
            home_runs = int(at_bats * (np.random.normal(0.05, 0.02) if power_hitter else np.random.normal(0.02, 0.01)))
            rbis = int(max(10, min(150, home_runs * np.random.normal(3.5, 0.5))))
            stolen_bases = int(max(0, min(60, np.random.normal(30 if speed_player else 8, 10))))
            
            # Advanced metrics
            wrc_plus = int(max(40, min(200, 100 + (ops - 0.720) * 500)))
            
            # WAR - better hitters get higher WAR, adjusted for position
            position_adjustment = {
                'C': 1.2, '1B': 0.8, '2B': 1.1, '3B': 1.0, 'SS': 1.2,
                'LF': 0.9, 'CF': 1.1, 'RF': 0.9, 'DH': 0.7
            }
            base_war = (wrc_plus - 100) / 20 * position_adjustment[position]
            war = max(0, min(12, base_war * np.random.normal(1.0, 0.3)))
            
            # Set pitching stats to NaN for batters
            era = np.nan
            whip = np.nan
            innings = np.nan
            strikeouts = np.nan
            walks = np.nan
            wins = np.nan
            losses = np.nan
            saves = np.nan
            fip = np.nan
            k_per_9 = np.nan
            bb_per_9 = np.nan
            hr_per_9 = np.nan
        
        # Salary based on performance and service time
        if service_time < 3:
            # Pre-arbitration (near league minimum)
            salary = np.random.normal(720000, 50000)
        elif service_time < 6:
            # Arbitration (scaled by performance and service time)
            arb_multiplier = (service_time - 2) / 3  # 0.33 to 1.33
            perf_multiplier = war / 2  # Performance factor
            salary = 720000 + (arb_multiplier * perf_multiplier * 5000000)
        else:
            # Free agency (more closely tied to performance)
            if war < 1:
                salary = np.random.normal(2000000, 500000)
            elif war < 3:
                salary = np.random.normal(8000000, 3000000)
            elif war < 5:
                salary = np.random.normal(15000000, 5000000)
            else:
                salary = np.random.normal(25000000, 8000000)
        
        # Add some randomness to salary
        salary = max(720000, salary * np.random.normal(1.0, 0.2))
        
        # Contract details
        contract_years = 1
        if service_time >= 6 and war > 2:
            # Better free agents get longer contracts
            max_years = min(10, int(12 - (age - 25) / 2))
            contract_years = np.random.randint(1, max_years)
        
        # Statcast data (for batters only)
        if not is_pitcher:
            exit_velocity = max(80, min(115, np.random.normal(88.5, 5.0)))
            launch_angle = np.random.normal(12, 8)
            sprint_speed = max(23, min(30, np.random.normal(27, 1.5)))
            barrel_pct = max(0, min(25, np.random.normal(8, 4)))
        else:
            exit_velocity = np.nan
            launch_angle = np.nan
            sprint_speed = np.nan
            barrel_pct = np.nan
        
        # Defensive metrics
        if not is_pitcher and position != 'DH':
            defensive_runs_saved = int(np.random.normal(0, 8))
            outs_above_average = int(np.random.normal(0, 5))
        else:
            defensive_runs_saved = np.nan
            outs_above_average = np.nan
        
        # Expected stats (for batters)
        if not is_pitcher:
            x_ba = max(0.150, min(0.350, batting_avg + np.random.normal(0, 0.020)))
            x_slg = max(0.280, min(0.650, slg + np.random.normal(0, 0.040)))
            x_woba = max(0.250, min(0.450, (x_ba + x_slg) / 3))
        else:
            x_ba = np.nan
            x_slg = np.nan
            x_woba = np.nan
        
        # Injury risk
        injury_risk = np.random.normal(0.5, 0.15)
        injury_risk = max(0.1, min(0.9, injury_risk))
        
        # Projection for next year
        age_factor = 1.0
        if age < 27:
            # Young players tend to improve
            age_factor = np.random.normal(1.05, 0.05)
        elif age > 32:
            # Older players tend to decline
            age_factor = np.random.normal(0.95, 0.05)
        
        war_projection = war * age_factor * np.random.normal(1.0, 0.2)
        war_projection = max(0, min(12, war_projection))
        
        # Projection uncertainty (higher for younger and older players)
        if age < 25 or age > 35:
            projection_uncertainty = np.random.normal(0.4, 0.1)
        else:
            projection_uncertainty = np.random.normal(0.25, 0.05)
        projection_uncertainty = max(0.1, min(0.6, projection_uncertainty))
        
        # Market value ($ per WAR)
        dollar_per_war = np.random.normal(8000000, 1000000)
        market_value = war * dollar_per_war
        
        # Value differential (market value - salary)
        value_differential = market_value - salary
        
        player_data = {
            'player_id': player_id,
            'name': player_name,
            'team': team,
            'position': position,
            'age': age,
            'service_time': service_time,
            'salary': salary,
            'contract_years': contract_years,
            'war': war,
            'war_projection': war_projection,
            'projection_uncertainty': projection_uncertainty,
            'market_value': market_value,
            'value_differential': value_differential,
            'injury_risk': injury_risk
        }
        
        # Add position-specific stats
        if is_pitcher:
            pitcher_stats = {
                'era': era,
                'whip': whip,
                'innings': innings,
                'strikeouts': strikeouts,
                'walks': walks,
                'wins': wins,
                'losses': losses,
                'saves': saves,
                'fip': fip,
                'k_per_9': k_per_9,
                'bb_per_9': bb_per_9,
                'hr_per_9': hr_per_9
            }
            player_data.update(pitcher_stats)
        else:
            batter_stats = {
                'batting_avg': batting_avg,
                'obp': obp,
                'slg': slg,
                'ops': ops,
                'wrc_plus': wrc_plus,
                'home_runs': home_runs,
                'rbis': rbis,
                'stolen_bases': stolen_bases,
                'exit_velocity': exit_velocity,
                'launch_angle': launch_angle,
                'sprint_speed': sprint_speed,
                'barrel_pct': barrel_pct,
                'defensive_runs_saved': defensive_runs_saved,
                'outs_above_average': outs_above_average,
                'x_ba': x_ba,
                'x_slg': x_slg,
                'x_woba': x_woba
            }
            player_data.update(batter_stats)
        
        data.append(player_data)
    
    # Convert to DataFrame
    df = pd.DataFrame(data)
    
    return df
