from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional, Dict, Any
from app.models.statistics import (
    LeagueAverages,
    StatcastMetrics,
    AdvancedMetrics,
    StatisticalLeaders
)
from app.services.stats_service import (
    get_league_averages,
    get_statcast_metrics,
    get_advanced_metrics,
    get_statistical_leaders
)

router = APIRouter()


@router.get("/league-averages", response_model=LeagueAverages)
async def read_league_averages(
    season: int = Query(..., description="Season year (e.g., 2022)"),
    category: str = Query("batting", description="Category: batting, pitching, or fielding"),
):
    """
    Retrieve league average statistics for a specific season and category.
    """
    averages = get_league_averages(season, category)
    if averages is None:
        raise HTTPException(status_code=404, detail="League averages not found")
    return averages


@router.get("/statcast", response_model=StatcastMetrics)
async def read_statcast_metrics(
    player_id: Optional[int] = None,
    team_id: Optional[str] = None,
    start_date: Optional[str] = Query(None, description="Start date (YYYY-MM-DD)"),
    end_date: Optional[str] = Query(None, description="End date (YYYY-MM-DD)"),
    season: Optional[int] = Query(None, description="Season year (e.g., 2022)"),
    metric_type: str = Query("batting", description="Metric type: batting or pitching"),
):
    """
    Retrieve Statcast metrics with various filtering options.
    """
    if player_id is None and team_id is None and season is None:
        raise HTTPException(status_code=400, detail="At least one of player_id, team_id, or season must be provided")
    
    metrics = get_statcast_metrics(
        player_id=player_id,
        team_id=team_id,
        start_date=start_date,
        end_date=end_date,
        season=season,
        metric_type=metric_type
    )
    
    if metrics is None:
        raise HTTPException(status_code=404, detail="Statcast metrics not found")
    
    return metrics


@router.get("/advanced-metrics", response_model=AdvancedMetrics)
async def read_advanced_metrics(
    player_id: Optional[int] = None,
    team_id: Optional[str] = None,
    season: int = Query(..., description="Season year (e.g., 2022)"),
    metric_type: str = Query("batting", description="Metric type: batting, pitching, or fielding"),
):
    """
    Retrieve advanced metrics for players or teams.
    """
    if player_id is None and team_id is None:
        raise HTTPException(status_code=400, detail="Either player_id or team_id must be provided")
    
    metrics = get_advanced_metrics(
        player_id=player_id,
        team_id=team_id,
        season=season,
        metric_type=metric_type
    )
    
    if metrics is None:
        raise HTTPException(status_code=404, detail="Advanced metrics not found")
    
    return metrics


@router.get("/leaders", response_model=StatisticalLeaders)
async def read_statistical_leaders(
    season: int = Query(..., description="Season year (e.g., 2022)"),
    category: str = Query(..., description="Statistical category (e.g., HR, AVG, ERA, K)"),
    limit: int = Query(10, description="Number of leaders to return"),
):
    """
    Retrieve statistical leaders for a specific category and season.
    """
    leaders = get_statistical_leaders(season, category, limit)
    if leaders is None:
        raise HTTPException(status_code=404, detail="Statistical leaders not found")
    return leaders
