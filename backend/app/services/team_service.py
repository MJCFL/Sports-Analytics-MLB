from typing import List, Optional, Dict, Any
from app.models.team import Team, TeamRoster

# This is a mock implementation. In a real application, you would connect to a database.
# For now, we'll use an in-memory dictionary to store team data.
teams_db = {}


def get_teams(
    skip: int = 0,
    limit: int = 30,
    division: Optional[str] = None,
    league: Optional[str] = None,
) -> List[Team]:
    """
    Retrieve teams with optional filtering.
    
    Args:
        skip: Number of teams to skip
        limit: Maximum number of teams to return
        division: Filter by division
        league: Filter by league
        
    Returns:
        List of Team objects
    """
    filtered_teams = list(teams_db.values())
    
    if division:
        filtered_teams = [t for t in filtered_teams if t.division == division]
    
    if league:
        filtered_teams = [t for t in filtered_teams if t.league == league]
    
    return filtered_teams[skip : skip + limit]


def get_team(team_id: str) -> Optional[Team]:
    """
    Retrieve a specific team by ID.
    
    Args:
        team_id: The team's ID (abbreviation)
        
    Returns:
        Team object if found, None otherwise
    """
    return teams_db.get(team_id)


def get_team_roster(team_id: str, season: Optional[int] = None) -> Optional[TeamRoster]:
    """
    Retrieve the roster for a specific team.
    
    Args:
        team_id: The team's ID (abbreviation)
        season: The season year (defaults to 2024)
        
    Returns:
        TeamRoster object if found, None otherwise
    """
    # In a real implementation, this would query a database or API
    # For now, we'll return a mock roster for the Miami Marlins
    
    if team_id not in teams_db:
        return None
    
    if not season:
        season = 2024  # Use 2024 as the default season
    
    # Get players from player_service
    from app.services.player_service import get_players
    team_players = get_players(team=team_id)
    
    # Mock payroll data
    payroll = 0
    for player in team_players:
        # In a real implementation, this would come from a database
        # For now, we'll assign random salaries
        import random
        player.salary = random.uniform(700000, 20000000)
        payroll += player.salary
    
    # Find highest paid player
    highest_paid = max(team_players, key=lambda p: getattr(p, 'salary', 0)) if team_players else None
    highest_paid_dict = {
        "id": highest_paid.id,
        "name": highest_paid.name,
        "salary": getattr(highest_paid, 'salary', 0)
    } if highest_paid else {}
    
    # Count positions
    pitchers = sum(1 for p in team_players if p.position.startswith('P'))
    position_players = len(team_players) - pitchers
    
    # Create roster
    roster = TeamRoster(
        team_id=team_id,
        season=season,
        players=team_players,
        position_players=position_players,
        pitchers=pitchers,
        active_roster=len(team_players),
        injured_list=0,  # Mock data
        total_payroll=payroll,
        average_salary=payroll / len(team_players) if team_players else 0,
        median_salary=sorted([getattr(p, 'salary', 0) for p in team_players])[len(team_players) // 2] if team_players else 0,
        highest_paid_player=highest_paid_dict
    )
    
    return roster


# Initialize with MLB team data
def initialize_team_data():
    """Initialize the database with MLB team data."""
    mlb_teams = [
        Team(
            id="MIA",
            name="Marlins",
            full_name="Miami Marlins",
            location="Miami",
            league="NL",
            division="East",
            venue="loanDepot Park",
            first_year=1993
        ),
        Team(
            id="NYY",
            name="Yankees",
            full_name="New York Yankees",
            location="New York",
            league="AL",
            division="East",
            venue="Yankee Stadium",
            first_year=1901
        ),
        Team(
            id="LAD",
            name="Dodgers",
            full_name="Los Angeles Dodgers",
            location="Los Angeles",
            league="NL",
            division="West",
            venue="Dodger Stadium",
            first_year=1884
        ),
        Team(
            id="BOS",
            name="Red Sox",
            full_name="Boston Red Sox",
            location="Boston",
            league="AL",
            division="East",
            venue="Fenway Park",
            first_year=1901
        ),
        Team(
            id="CHC",
            name="Cubs",
            full_name="Chicago Cubs",
            location="Chicago",
            league="NL",
            division="Central",
            venue="Wrigley Field",
            first_year=1876
        ),
        Team(
            id="LAA",
            name="Angels",
            full_name="Los Angeles Angels",
            location="Anaheim",
            league="AL",
            division="West",
            venue="Angel Stadium",
            first_year=1961
        ),
        Team(
            id="ATL",
            name="Braves",
            full_name="Atlanta Braves",
            location="Atlanta",
            league="NL",
            division="East",
            venue="Truist Park",
            first_year=1871
        ),
        Team(
            id="HOU",
            name="Astros",
            full_name="Houston Astros",
            location="Houston",
            league="AL",
            division="West",
            venue="Minute Maid Park",
            first_year=1962
        )
    ]
    
    for team in mlb_teams:
        teams_db[team.id] = team


# Initialize team data
initialize_team_data()
