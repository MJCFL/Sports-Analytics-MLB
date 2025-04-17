import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <p><strong>Team:</strong> {player.team} | <strong>Position:</strong> {player.position}</p>
      <p><strong>Age:</strong> {player.age} | <strong>Service Time:</strong> {player.serviceTime} years</p>
      <p><strong>WAR:</strong> {player.war.toFixed(1)}</p>
      <p><strong>Salary:</strong> ${player.salary.toFixed(1)}M</p>
      
      {player.isPitcher ? (
        <div className="player-stats">
          <h3>Pitching Stats</h3>
          <p><strong>ERA:</strong> {player.pitchingStats.era.toFixed(2)}</p>
          <p><strong>WHIP:</strong> {player.pitchingStats.whip.toFixed(2)}</p>
          <p><strong>K/9:</strong> {player.pitchingStats.kPer9.toFixed(1)}</p>
          <p><strong>BB/9:</strong> {player.pitchingStats.bbPer9.toFixed(1)}</p>
          <p><strong>Innings:</strong> {player.pitchingStats.innings}</p>
          <p><strong>Record:</strong> {player.pitchingStats.wins}-{player.pitchingStats.losses}</p>
        </div>
      ) : (
        <div className="player-stats">
          <h3>Batting Stats</h3>
          <p><strong>AVG/OBP/SLG:</strong> {player.battingStats.avg.toFixed(3)}/{player.battingStats.obp.toFixed(3)}/{player.battingStats.slg.toFixed(3)}</p>
          <p><strong>OPS:</strong> {player.battingStats.ops.toFixed(3)}</p>
          <p><strong>HR:</strong> {player.battingStats.hr}</p>
          <p><strong>RBI:</strong> {player.battingStats.rbi}</p>
          <p><strong>Exit Velocity:</strong> {player.battingStats.exitVelo.toFixed(1)} mph</p>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
