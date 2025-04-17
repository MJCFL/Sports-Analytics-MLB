# MLB Analytics Platform Backend

This directory contains the FastAPI backend for the MLB Analytics Platform, providing RESTful API endpoints for player performance analysis, team statistics, and predictive modeling.

## Features

- **Player API**: Endpoints for retrieving player information, statistics, and valuations
- **Team API**: Endpoints for team data, statistics, and roster information
- **Statistics API**: Advanced metrics, Statcast data, and league averages
- **Prediction API**: Player performance and valuation predictions

## Getting Started

### Prerequisites

- Python 3.8+
- Virtual environment (recommended)

### Installation

1. Create and activate a virtual environment:

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r ../requirements.txt
```

### Running the Server

From the backend directory, run:

```bash
uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

### API Documentation

Once the server is running, you can access:

- Interactive API documentation: http://localhost:8000/docs
- Alternative documentation: http://localhost:8000/redoc

## API Endpoints

### Player Endpoints

- `GET /api/players/`: List all players with optional filtering
- `GET /api/players/{player_id}`: Get a specific player
- `GET /api/players/{player_id}/stats`: Get player statistics
- `GET /api/players/{player_id}/valuation`: Get player valuation metrics
- `GET /api/players/{player_id}/similar`: Find similar players

### Team Endpoints

- `GET /api/teams/`: List all teams with optional filtering
- `GET /api/teams/{team_id}`: Get a specific team
- `GET /api/teams/{team_id}/stats`: Get team statistics
- `GET /api/teams/{team_id}/roster`: Get team roster

### Statistics Endpoints

- `GET /api/statistics/league-averages`: Get league average statistics
- `GET /api/statistics/statcast`: Get Statcast metrics
- `GET /api/statistics/advanced-metrics`: Get advanced metrics
- `GET /api/statistics/leaders`: Get statistical leaders

### Prediction Endpoints

- `GET /api/predictions/player/{player_id}/performance`: Predict player performance
- `GET /api/predictions/player/{player_id}/valuation`: Predict player valuation
- `GET /api/predictions/team/{team_id}/performance`: Predict team performance

## Project Structure

```
backend/
├── app/
│   ├── api/
│   │   ├── endpoints/
│   │   │   ├── players.py
│   │   │   ├── teams.py
│   │   │   ├── predictions.py
│   │   │   └── statistics.py
│   ├── models/
│   │   ├── player.py
│   │   ├── team.py
│   │   ├── prediction.py
│   │   └── statistics.py
│   ├── services/
│   │   ├── player_service.py
│   │   ├── team_service.py
│   │   ├── stats_service.py
│   │   └── prediction_service.py
│   └── main.py
└── README.md
```

## Next Steps

1. Connect to a real database (PostgreSQL recommended)
2. Implement data fetching from MLB APIs and Statcast
3. Train and integrate machine learning models for predictions
4. Add authentication and rate limiting
5. Set up CI/CD pipeline for testing and deployment
