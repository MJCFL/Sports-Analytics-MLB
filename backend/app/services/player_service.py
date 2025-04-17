from typing import List, Optional, Dict, Any
from app.models.player import Player, PlayerCreate, PlayerUpdate

# This is a mock implementation. In a real application, you would connect to a database.
# For now, we'll use an in-memory dictionary to store player data.
players_db = {}
next_player_id = 1


def get_players(
    skip: int = 0,
    limit: int = 100,
    name: Optional[str] = None,
    team: Optional[str] = None,
    position: Optional[str] = None,
) -> List[Player]:
    """
    Retrieve players with optional filtering.
    
    Args:
        skip: Number of players to skip
        limit: Maximum number of players to return
        name: Filter by player name (partial match)
        team: Filter by team ID
        position: Filter by position
        
    Returns:
        List of Player objects
    """
    filtered_players = list(players_db.values())
    
    if name:
        filtered_players = [p for p in filtered_players if name.lower() in p.name.lower()]
    
    if team:
        filtered_players = [p for p in filtered_players if p.team_id == team]
    
    if position:
        filtered_players = [p for p in filtered_players if p.position == position]
    
    return filtered_players[skip : skip + limit]


def get_player(player_id: int) -> Optional[Player]:
    """
    Retrieve a specific player by ID.
    
    Args:
        player_id: The player's ID
        
    Returns:
        Player object if found, None otherwise
    """
    return players_db.get(player_id)


def create_player(player: PlayerCreate) -> Player:
    """
    Create a new player.
    
    Args:
        player: PlayerCreate object with player data
        
    Returns:
        Created Player object
    """
    global next_player_id
    
    # Calculate age from birth_date if available
    age = None
    if player.birth_date:
        from datetime import date
        today = date.today()
        age = today.year - player.birth_date.year - ((today.month, today.day) < (player.birth_date.month, player.birth_date.day))
    
    # Create new player
    db_player = Player(
        id=next_player_id,
        **player.dict(),
        age=age,
        mlb_service_time=0.0,
        active=True
    )
    
    # Add to database
    players_db[next_player_id] = db_player
    next_player_id += 1
    
    return db_player


def update_player(player_id: int, player_update: PlayerUpdate) -> Optional[Player]:
    """
    Update a player.
    
    Args:
        player_id: The player's ID
        player_update: PlayerUpdate object with updated data
        
    Returns:
        Updated Player object if found, None otherwise
    """
    if player_id not in players_db:
        return None
    
    # Get current player data
    db_player = players_db[player_id]
    
    # Update fields that are provided
    update_data = player_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_player, field, value)
    
    # Update the player in the database
    players_db[player_id] = db_player
    
    return db_player


def delete_player(player_id: int) -> bool:
    """
    Delete a player.
    
    Args:
        player_id: The player's ID
        
    Returns:
        True if deleted, False if not found
    """
    if player_id not in players_db:
        return False
    
    del players_db[player_id]
    return True


# Initialize with some sample data
def initialize_sample_data():
    """Initialize the database with sample player data."""
    from datetime import date
    
    sample_players = [
        PlayerCreate(
            name="Mike Trout",
            team_id="LAA",
            position="CF",
            jersey_number=27,
            bats="R",
            throws="R",
            height=75,  # 6'3"
            weight=235,
            birth_date=date(1991, 8, 7),
            birth_country="USA",
            mlb_debut=date(2011, 7, 8)
        ),
        PlayerCreate(
            name="Shohei Ohtani",
            team_id="LAD",
            position="DH",
            jersey_number=17,
            bats="L",
            throws="R",
            height=76,  # 6'4"
            weight=210,
            birth_date=date(1994, 7, 5),
            birth_country="Japan",
            mlb_debut=date(2018, 3, 29)
        ),
        PlayerCreate(
            name="Aaron Judge",
            team_id="NYY",
            position="RF",
            jersey_number=99,
            bats="R",
            throws="R",
            height=79,  # 6'7"
            weight=282,
            birth_date=date(1992, 4, 26),
            birth_country="USA",
            mlb_debut=date(2016, 8, 13)
        ),
        PlayerCreate(
            name="Sandy Alcantara",
            team_id="MIA",
            position="P",
            jersey_number=22,
            bats="R",
            throws="R",
            height=77,  # 6'5"
            weight=200,
            birth_date=date(1995, 9, 7),
            birth_country="Dominican Republic",
            mlb_debut=date(2017, 9, 3)
        ),
        PlayerCreate(
            name="Jazz Chisholm Jr.",
            team_id="MIA",
            position="CF",
            jersey_number=2,
            bats="L",
            throws="R",
            height=70,  # 5'10"
            weight=184,
            birth_date=date(1998, 2, 1),
            birth_country="Bahamas",
            mlb_debut=date(2020, 9, 1)
        )
    ]
    
    for player_data in sample_players:
        create_player(player_data)


# Initialize sample data
initialize_sample_data()
