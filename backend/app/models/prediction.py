from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any


class PerformancePredictionInterval(BaseModel):
    """Model for prediction intervals."""
    lower: float
    mean: float
    upper: float


class PerformancePrediction(BaseModel):
    """Model for player performance predictions."""
    player_id: int
    season: int
    
    # Batting predictions
    batting_average: Optional[PerformancePredictionInterval] = None
    on_base_percentage: Optional[PerformancePredictionInterval] = None
    slugging_percentage: Optional[PerformancePredictionInterval] = None
    home_runs: Optional[PerformancePredictionInterval] = None
    runs_batted_in: Optional[PerformancePredictionInterval] = None
    stolen_bases: Optional[PerformancePredictionInterval] = None
    weighted_runs_created_plus: Optional[PerformancePredictionInterval] = None
    
    # Pitching predictions
    earned_run_average: Optional[PerformancePredictionInterval] = None
    walks_and_hits_per_inning_pitched: Optional[PerformancePredictionInterval] = None
    strikeouts: Optional[PerformancePredictionInterval] = None
    wins: Optional[PerformancePredictionInterval] = None
    fielding_independent_pitching: Optional[PerformancePredictionInterval] = None
    
    # Overall value prediction
    war: Optional[PerformancePredictionInterval] = None
    
    # Prediction metadata
    model_version: str
    features_used: List[str]
    prediction_date: str


class ValuationPrediction(BaseModel):
    """Model for player valuation predictions."""
    player_id: int
    season: int
    
    # Salary and value predictions
    projected_war: float
    market_value: float
    salary_prediction: float
    surplus_value: float
    
    # Contract predictions
    optimal_contract_years: int
    optimal_annual_value: float
    optimal_total_value: float
    
    # Comparable players
    comparable_players: List[Dict[str, Any]]
    
    # Prediction metadata
    model_version: str
    prediction_date: str
    confidence_score: float
