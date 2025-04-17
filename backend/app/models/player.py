from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import date


class PlayerBase(BaseModel):
    """Base model for player data."""
    name: str
    team_id: str
    position: str
    jersey_number: Optional[int] = None
    bats: Optional[str] = None
    throws: Optional[str] = None
    height: Optional[int] = None  # In inches
    weight: Optional[int] = None  # In pounds
    birth_date: Optional[date] = None
    birth_country: Optional[str] = None
    mlb_debut: Optional[date] = None


class PlayerCreate(PlayerBase):
    """Model for creating a new player."""
    pass


class PlayerUpdate(BaseModel):
    """Model for updating a player."""
    name: Optional[str] = None
    team_id: Optional[str] = None
    position: Optional[str] = None
    jersey_number: Optional[int] = None
    bats: Optional[str] = None
    throws: Optional[str] = None
    height: Optional[int] = None
    weight: Optional[int] = None


class Player(PlayerBase):
    """Model for a player with ID."""
    id: int
    age: Optional[int] = None
    mlb_service_time: Optional[float] = None
    active: bool = True
    
    class Config:
        orm_mode = True


class BattingStats(BaseModel):
    """Model for batting statistics."""
    games: int
    plate_appearances: int
    at_bats: int
    runs: int
    hits: int
    doubles: int
    triples: int
    home_runs: int
    runs_batted_in: int
    stolen_bases: int
    caught_stealing: int
    walks: int
    strikeouts: int
    batting_average: float
    on_base_percentage: float
    slugging_percentage: float
    on_base_plus_slugging: float
    weighted_on_base_average: Optional[float] = None
    weighted_runs_created_plus: Optional[int] = None
    batting_average_on_balls_in_play: Optional[float] = None
    isolated_power: Optional[float] = None
    walk_percentage: Optional[float] = None
    strikeout_percentage: Optional[float] = None


class PitchingStats(BaseModel):
    """Model for pitching statistics."""
    games: int
    games_started: int
    innings_pitched: float
    wins: int
    losses: int
    saves: int
    earned_run_average: float
    walks_and_hits_per_inning_pitched: float
    hits_allowed: int
    runs_allowed: int
    earned_runs: int
    home_runs_allowed: int
    walks: int
    strikeouts: int
    strikeouts_per_nine: float
    walks_per_nine: float
    home_runs_per_nine: float
    fielding_independent_pitching: Optional[float] = None
    expected_fielding_independent_pitching: Optional[float] = None
    strikeout_percentage: Optional[float] = None
    walk_percentage: Optional[float] = None
    ground_ball_percentage: Optional[float] = None
    left_on_base_percentage: Optional[float] = None


class FieldingStats(BaseModel):
    """Model for fielding statistics."""
    games: int
    innings: float
    putouts: int
    assists: int
    errors: int
    fielding_percentage: float
    defensive_runs_saved: Optional[int] = None
    ultimate_zone_rating: Optional[float] = None
    outs_above_average: Optional[int] = None


class StatcastData(BaseModel):
    """Model for Statcast data."""
    average_exit_velocity: Optional[float] = None
    max_exit_velocity: Optional[float] = None
    average_launch_angle: Optional[float] = None
    barrel_percentage: Optional[float] = None
    sweet_spot_percentage: Optional[float] = None
    hard_hit_percentage: Optional[float] = None
    average_sprint_speed: Optional[float] = None
    
    # Pitching-specific Statcast data
    average_fastball_velocity: Optional[float] = None
    spin_rate_fastball: Optional[float] = None
    spin_rate_breaking: Optional[float] = None
    whiff_percentage: Optional[float] = None
    chase_percentage: Optional[float] = None


class PlayerStats(BaseModel):
    """Model for player statistics."""
    player_id: int
    season: int
    batting: Optional[BattingStats] = None
    pitching: Optional[PitchingStats] = None
    fielding: Optional[FieldingStats] = None
    statcast: Optional[StatcastData] = None
    war: Optional[float] = None


class PlayerValuation(BaseModel):
    """Model for player valuation."""
    player_id: int
    season: int
    salary: float
    market_value: float
    war: float
    dollars_per_war: float
    value_above_salary: float
    contract_status: str
    free_agent_year: Optional[int] = None
    
    # Advanced valuation metrics
    zips_projected_war: Optional[float] = None
    steamer_projected_war: Optional[float] = None
    projected_market_value: Optional[float] = None
    surplus_value: Optional[float] = None
