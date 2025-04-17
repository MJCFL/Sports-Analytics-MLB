from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from app.models.player import Player, PlayerCreate, PlayerUpdate, PlayerStats, PlayerValuation
from app.services.player_service import get_player, get_players, create_player, update_player, delete_player
from app.services.stats_service import get_player_stats
from app.services.valuation_service import get_player_valuation, get_similar_players

router = APIRouter()


@router.get("/", response_model=List[Player])
async def read_players(
    skip: int = 0,
    limit: int = 100,
    name: Optional[str] = None,
    team: Optional[str] = None,
    position: Optional[str] = None,
):
    """
    Retrieve players with optional filtering.
    """
    return get_players(skip=skip, limit=limit, name=name, team=team, position=position)


@router.get("/{player_id}", response_model=Player)
async def read_player(player_id: int):
    """
    Retrieve a specific player by ID.
    """
    player = get_player(player_id)
    if player is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return player


@router.post("/", response_model=Player)
async def create_player_endpoint(player: PlayerCreate):
    """
    Create a new player.
    """
    return create_player(player)


@router.put("/{player_id}", response_model=Player)
async def update_player_endpoint(player_id: int, player: PlayerUpdate):
    """
    Update a player.
    """
    updated_player = update_player(player_id, player)
    if updated_player is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return updated_player


@router.delete("/{player_id}")
async def delete_player_endpoint(player_id: int):
    """
    Delete a player.
    """
    success = delete_player(player_id)
    if not success:
        raise HTTPException(status_code=404, detail="Player not found")
    return {"message": "Player deleted successfully"}


@router.get("/{player_id}/stats", response_model=PlayerStats)
async def read_player_stats(
    player_id: int,
    season: Optional[int] = Query(None, description="Season year (e.g., 2022)"),
):
    """
    Retrieve statistics for a specific player.
    """
    stats = get_player_stats(player_id, season)
    if stats is None:
        raise HTTPException(status_code=404, detail="Player stats not found")
    return stats


@router.get("/{player_id}/valuation", response_model=PlayerValuation)
async def read_player_valuation(player_id: int):
    """
    Retrieve valuation metrics for a specific player.
    """
    valuation = get_player_valuation(player_id)
    if valuation is None:
        raise HTTPException(status_code=404, detail="Player valuation not found")
    return valuation


@router.get("/{player_id}/similar", response_model=List[Player])
async def read_similar_players(
    player_id: int,
    limit: int = Query(5, description="Number of similar players to return"),
):
    """
    Find players with similar statistical profiles.
    """
    player = get_player(player_id)
    if player is None:
        raise HTTPException(status_code=404, detail="Player not found")
    
    similar_players = get_similar_players(player_id, limit)
    return similar_players
