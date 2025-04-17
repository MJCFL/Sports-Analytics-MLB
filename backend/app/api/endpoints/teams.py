from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from app.models.team import Team, TeamStats, TeamRoster
from app.services.team_service import get_team, get_teams, get_team_roster
from app.services.stats_service import get_team_stats

router = APIRouter()


@router.get("/", response_model=List[Team])
async def read_teams(
    skip: int = 0,
    limit: int = 30,  # MLB has 30 teams
    division: Optional[str] = None,
    league: Optional[str] = None,
):
    """
    Retrieve teams with optional filtering by division or league.
    """
    return get_teams(skip=skip, limit=limit, division=division, league=league)


@router.get("/{team_id}", response_model=Team)
async def read_team(team_id: str):
    """
    Retrieve a specific team by ID.
    """
    team = get_team(team_id)
    if team is None:
        raise HTTPException(status_code=404, detail="Team not found")
    return team


@router.get("/{team_id}/stats", response_model=TeamStats)
async def read_team_stats(
    team_id: str,
    season: Optional[int] = Query(None, description="Season year (e.g., 2022)"),
):
    """
    Retrieve statistics for a specific team.
    """
    stats = get_team_stats(team_id, season)
    if stats is None:
        raise HTTPException(status_code=404, detail="Team stats not found")
    return stats


@router.get("/{team_id}/roster", response_model=TeamRoster)
async def read_team_roster(
    team_id: str,
    season: Optional[int] = Query(None, description="Season year (e.g., 2022)"),
):
    """
    Retrieve the roster for a specific team.
    """
    roster = get_team_roster(team_id, season)
    if roster is None:
        raise HTTPException(status_code=404, detail="Team roster not found")
    return roster
