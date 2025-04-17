from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from app.models.prediction import PerformancePrediction, ValuationPrediction
from app.services.prediction_service import (
    predict_player_performance,
    predict_player_valuation,
    predict_team_performance,
)

router = APIRouter()


@router.get("/player/{player_id}/performance", response_model=PerformancePrediction)
async def predict_player_performance_endpoint(
    player_id: int,
    season: int = Query(..., description="Season year to predict (e.g., 2023)"),
    include_uncertainty: bool = Query(True, description="Include uncertainty estimates"),
):
    """
    Predict performance metrics for a player in a future season.
    """
    prediction = predict_player_performance(player_id, season, include_uncertainty)
    if prediction is None:
        raise HTTPException(status_code=404, detail="Player not found or insufficient data for prediction")
    return prediction


@router.get("/player/{player_id}/valuation", response_model=ValuationPrediction)
async def predict_player_valuation_endpoint(
    player_id: int,
    season: int = Query(..., description="Season year to predict (e.g., 2023)"),
):
    """
    Predict market value and contract value for a player in a future season.
    """
    prediction = predict_player_valuation(player_id, season)
    if prediction is None:
        raise HTTPException(status_code=404, detail="Player not found or insufficient data for prediction")
    return prediction


@router.get("/team/{team_id}/performance")
async def predict_team_performance_endpoint(
    team_id: str,
    season: int = Query(..., description="Season year to predict (e.g., 2023)"),
):
    """
    Predict team performance for a future season.
    """
    prediction = predict_team_performance(team_id, season)
    if prediction is None:
        raise HTTPException(status_code=404, detail="Team not found or insufficient data for prediction")
    return prediction
