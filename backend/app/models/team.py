from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from app.models.player import Player


class Team(BaseModel):
    """Model for team data."""
    id: str  # Team abbreviation (e.g., NYY, LAD)
    name: str
    full_name: str
    location: str
    league: str
    division: str
    venue: str
    first_year: int
    
    class Config:
        orm_mode = True


class TeamStats(BaseModel):
    """Model for team statistics."""
    team_id: str
    season: int
    
    # Team record
    wins: int
    losses: int
    win_percentage: float
    games_back: float
    run_differential: int
    
    # Batting stats
    runs_scored: int
    hits: int
    home_runs: int
    batting_average: float
    on_base_percentage: float
    slugging_percentage: float
    on_base_plus_slugging: float
    weighted_runs_created_plus: Optional[int] = None
    
    # Pitching stats
    earned_run_average: float
    walks_and_hits_per_inning_pitched: float
    strikeouts: int
    walks: int
    saves: int
    strikeouts_per_nine: float
    
    # Fielding stats
    errors: int
    fielding_percentage: float
    defensive_efficiency: Optional[float] = None
    
    # Advanced stats
    pythagorean_win_percentage: Optional[float] = None
    base_runs: Optional[float] = None
    team_war: Optional[float] = None


class TeamRoster(BaseModel):
    """Model for team roster."""
    team_id: str
    season: int
    players: List[Player]
    
    # Roster breakdown
    position_players: int
    pitchers: int
    active_roster: int
    injured_list: int
    
    # Payroll information
    total_payroll: float
    average_salary: float
    median_salary: float
    highest_paid_player: Dict[str, Any]
