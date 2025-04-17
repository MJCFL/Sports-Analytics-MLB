from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI(
    title="MLB Analytics Platform API",
    description="API for MLB player performance analysis and prediction",
    version="1.0.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers
from app.api.endpoints import players, teams, predictions, statistics

# Include routers
app.include_router(players.router, prefix="/api/players", tags=["players"])
app.include_router(teams.router, prefix="/api/teams", tags=["teams"])
app.include_router(predictions.router, prefix="/api/predictions", tags=["predictions"])
app.include_router(statistics.router, prefix="/api/statistics", tags=["statistics"])


@app.get("/", tags=["root"])
async def root():
    """Root endpoint that returns API information."""
    return {
        "message": "Welcome to the MLB Analytics Platform API",
        "version": "1.0.0",
        "documentation": "/docs",
    }


@app.get("/health", tags=["health"])
async def health_check():
    """Health check endpoint."""
    return JSONResponse(
        status_code=200,
        content={"status": "healthy"},
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
