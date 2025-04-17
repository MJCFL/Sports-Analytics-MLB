import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import PerformanceComparison from './components/PerformanceComparison';
import ValueAnalysis from './components/ValueAnalysis';
import { playerData } from './data/playerData';

function App() {
  const [player1, setPlayer1] = useState(playerData[0]);
  const [player2, setPlayer2] = useState(playerData[1]);
  const [activeTab, setActiveTab] = useState('overview');

  // Handle player selection
  const handlePlayerChange = (playerNum, playerId) => {
    const selectedPlayer = playerData.find(player => player.id === parseInt(playerId));
    if (playerNum === 1) {
      setPlayer1(selectedPlayer);
    } else {
      setPlayer2(selectedPlayer);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>MLB Player Comparison Tool</h1>
        <p>Compare player performance, value, and trade potential</p>
      </header>

      <div className="container">
        <div className="sidebar">
          <h2>Player Selection</h2>
          
          <div className="filter-group">
            <label htmlFor="player1-select">Player 1:</label>
            <select 
              id="player1-select" 
              value={player1.id}
              onChange={(e) => handlePlayerChange(1, e.target.value)}
            >
              {playerData.map(player => (
                <option key={player.id} value={player.id}>
                  {player.name} ({player.team})
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="player2-select">Player 2:</label>
            <select 
              id="player2-select" 
              value={player2.id}
              onChange={(e) => handlePlayerChange(2, e.target.value)}
            >
              {playerData.map(player => (
                <option key={player.id} value={player.id}>
                  {player.name} ({player.team})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="main-content">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
            <button 
              className={`tab-btn ${activeTab === 'value' ? 'active' : ''}`}
              onClick={() => setActiveTab('value')}
            >
              Value Analysis
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="tab-pane">
                <div className="player-cards">
                  <PlayerCard player={player1} />
                  <PlayerCard player={player2} />
                </div>
              </div>
            )}
            
            {activeTab === 'performance' && (
              <div className="tab-pane">
                <PerformanceComparison player1={player1} player2={player2} />
              </div>
            )}
            
            {activeTab === 'value' && (
              <div className="tab-pane">
                <ValueAnalysis player1={player1} player2={player2} />
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>MLB Player Comparison Tool | MLB Analytics Platform | 2025</p>
      </footer>
    </div>
  );
}

export default App;
