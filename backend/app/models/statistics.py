from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any


class LeagueAverages(BaseModel):
    """Model for league average statistics."""
    season: int
    category: str  # batting, pitching, or fielding
    metrics: Dict[str, float]
    
    # Additional metadata
    sample_size: int
    last_updated: str


class StatcastMetrics(BaseModel):
    """Model for Statcast metrics."""
    player_id: Optional[int] = None
    team_id: Optional[str] = None
    season: Optional[int] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    metric_type: str  # batting or pitching
    
    # Metrics data
    metrics: List[Dict[str, Any]]
    
    # Aggregated metrics
    aggregated: Dict[str, Any]
    
    # Metadata
    sample_size: int
    last_updated: str


class AdvancedMetrics(BaseModel):
    """Model for advanced metrics."""
    player_id: Optional[int] = None
    team_id: Optional[str] = None
    season: int
    metric_type: str  # batting, pitching, or fielding
    
    # Advanced metrics data
    metrics: Dict[str, Any]
    
    # League percentile rankings
    percentiles: Dict[str, int]
    
    # Historical comparison
    historical_comparison: Optional[Dict[str, Any]] = None
    
    # Metadata
    last_updated: str


class StatisticalLeader(BaseModel):
    """Model for an individual statistical leader."""
    player_id: int
    player_name: str
    team_id: str
    value: float
    rank: int


class StatisticalLeaders(BaseModel):
    """Model for statistical leaders."""
    season: int
    category: str
    leaders: List[StatisticalLeader]
    
    # Metadata
    qualification_threshold: Optional[str] = None
    last_updated: str
