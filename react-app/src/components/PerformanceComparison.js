import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import './PerformanceComparison.css';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const PerformanceComparison = ({ player1, player2 }) => {
  // Check if both players are the same type (pitcher or batter)
  const sameType = player1.isPitcher === player2.isPitcher;
  
  // Prepare radar chart data
  const getRadarData = () => {
    if (sameType) {
      if (player1.isPitcher) {
        // Pitcher comparison
        const categories = ['WAR', 'ERA', 'WHIP', 'K/9', 'BB/9', 'Innings'];
        
        // Lower ERA and WHIP are better, so invert those scales
        const p1Values = [
          player1.war / 10,  // Scale WAR to 0-1
          1 - (player1.pitchingStats.era / 6),  // Invert ERA (lower is better)
          1 - (player1.pitchingStats.whip / 1.8),  // Invert WHIP (lower is better)
          player1.pitchingStats.kPer9 / 15,  // Scale K/9
          1 - (player1.pitchingStats.bbPer9 / 6),  // Invert BB/9 (lower is better)
          player1.pitchingStats.innings / 220  // Scale innings
        ];
        
        const p2Values = [
          player2.war / 10,
          1 - (player2.pitchingStats.era / 6),
          1 - (player2.pitchingStats.whip / 1.8),
          player2.pitchingStats.kPer9 / 15,
          1 - (player2.pitchingStats.bbPer9 / 6),
          player2.pitchingStats.innings / 220
        ];
        
        return {
          labels: categories,
          datasets: [
            {
              label: player1.name,
              data: p1Values,
              backgroundColor: 'rgba(0, 45, 114, 0.2)',
              borderColor: 'rgba(0, 45, 114, 1)',
              pointBackgroundColor: 'rgba(0, 45, 114, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(0, 45, 114, 1)'
            },
            {
              label: player2.name,
              data: p2Values,
              backgroundColor: 'rgba(227, 25, 55, 0.2)',
              borderColor: 'rgba(227, 25, 55, 1)',
              pointBackgroundColor: 'rgba(227, 25, 55, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(227, 25, 55, 1)'
            }
          ]
        };
      } else {
        // Batter comparison
        const categories = ['WAR', 'AVG', 'OBP', 'SLG', 'HR', 'Exit Velo'];
        
        const p1Values = [
          player1.war / 10,  // Scale WAR to 0-1
          player1.battingStats.avg / 0.350,  // Scale AVG
          player1.battingStats.obp / 0.450,  // Scale OBP
          player1.battingStats.slg / 0.650,  // Scale SLG
          player1.battingStats.hr / 50,  // Scale HR
          player1.battingStats.exitVelo / 115  // Scale exit velocity
        ];
        
        const p2Values = [
          player2.war / 10,
          player2.battingStats.avg / 0.350,
          player2.battingStats.obp / 0.450,
          player2.battingStats.slg / 0.650,
          player2.battingStats.hr / 50,
          player2.battingStats.exitVelo / 115
        ];
        
        return {
          labels: categories,
          datasets: [
            {
              label: player1.name,
              data: p1Values,
              backgroundColor: 'rgba(0, 45, 114, 0.2)',
              borderColor: 'rgba(0, 45, 114, 1)',
              pointBackgroundColor: 'rgba(0, 45, 114, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(0, 45, 114, 1)'
            },
            {
              label: player2.name,
              data: p2Values,
              backgroundColor: 'rgba(227, 25, 55, 0.2)',
              borderColor: 'rgba(227, 25, 55, 1)',
              pointBackgroundColor: 'rgba(227, 25, 55, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(227, 25, 55, 1)'
            }
          ]
        };
      }
    } else {
      // Different player types - just compare WAR and age-related metrics
      const categories = ['WAR', 'Value/Salary', 'Age Factor', 'Projection'];
      
      // Age factor - younger players get higher scores
      const ageFactor1 = 1 - ((player1.age - 25) ** 2) / 400;  // Peaks at age 25
      const ageFactor2 = 1 - ((player2.age - 25) ** 2) / 400;
      
      const p1Values = [
        player1.war / 10,
        player1.war / (player1.salary + 0.1) / 2,
        ageFactor1,
        player1.projectionStats.warProjection / 10
      ];
      
      const p2Values = [
        player2.war / 10,
        player2.war / (player2.salary + 0.1) / 2,
        ageFactor2,
        player2.projectionStats.warProjection / 10
      ];
      
      return {
        labels: categories,
        datasets: [
          {
            label: player1.name,
            data: p1Values,
            backgroundColor: 'rgba(0, 45, 114, 0.2)',
            borderColor: 'rgba(0, 45, 114, 1)',
            pointBackgroundColor: 'rgba(0, 45, 114, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 45, 114, 1)'
          },
          {
            label: player2.name,
            data: p2Values,
            backgroundColor: 'rgba(227, 25, 55, 0.2)',
            borderColor: 'rgba(227, 25, 55, 1)',
            pointBackgroundColor: 'rgba(227, 25, 55, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(227, 25, 55, 1)'
          }
        ]
      };
    }
  };
  
  // Prepare bar chart data for key metrics
  const getBarData = () => {
    if (sameType) {
      if (player1.isPitcher) {
        // Pitchers
        return {
          labels: ['WAR', 'ERA', 'WHIP', 'K/9'],
          datasets: [
            {
              label: player1.name,
              data: [
                player1.war, 
                player1.pitchingStats.era, 
                player1.pitchingStats.whip, 
                player1.pitchingStats.kPer9
              ],
              backgroundColor: 'rgba(0, 45, 114, 0.8)',
            },
            {
              label: player2.name,
              data: [
                player2.war, 
                player2.pitchingStats.era, 
                player2.pitchingStats.whip, 
                player2.pitchingStats.kPer9
              ],
              backgroundColor: 'rgba(227, 25, 55, 0.8)',
            }
          ]
        };
      } else {
        // Batters
        return {
          labels: ['WAR', 'AVG', 'OPS', 'HR'],
          datasets: [
            {
              label: player1.name,
              data: [
                player1.war, 
                player1.battingStats.avg, 
                player1.battingStats.ops, 
                player1.battingStats.hr
              ],
              backgroundColor: 'rgba(0, 45, 114, 0.8)',
            },
            {
              label: player2.name,
              data: [
                player2.war, 
                player2.battingStats.avg, 
                player2.battingStats.ops, 
                player2.battingStats.hr
              ],
              backgroundColor: 'rgba(227, 25, 55, 0.8)',
            }
          ]
        };
      }
    } else {
      // Mixed - just show WAR
      return {
        labels: ['WAR', 'WAR Projection'],
        datasets: [
          {
            label: player1.name,
            data: [player1.war, player1.projectionStats.warProjection],
            backgroundColor: 'rgba(0, 45, 114, 0.8)',
          },
          {
            label: player2.name,
            data: [player2.war, player2.projectionStats.warProjection],
            backgroundColor: 'rgba(227, 25, 55, 0.8)',
          }
        ]
      };
    }
  };
  
  const radarData = getRadarData();
  const barData = getBarData();
  
  // Chart options
  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 1
      }
    }
  };
  
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Key Metrics Comparison',
      },
    },
  };
  
  return (
    <div className="performance-comparison">
      <div className="chart-container">
        <h3>Performance Radar</h3>
        <Radar data={radarData} options={radarOptions} />
      </div>
      
      <div className="chart-container">
        <h3>Key Metrics Comparison</h3>
        <Bar data={barData} options={barOptions} />
      </div>
      
      <div className="stats-comparison">
        <h3>Detailed Stats Comparison</h3>
        
        {sameType ? (
          player1.isPitcher ? (
            // Pitcher comparison table
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>{player1.name}</th>
                  <th>{player2.name}</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WAR</td>
                  <td>{player1.war.toFixed(1)}</td>
                  <td>{player2.war.toFixed(1)}</td>
                  <td>{(player1.war - player2.war).toFixed(1)}</td>
                </tr>
                <tr>
                  <td>ERA</td>
                  <td>{player1.pitchingStats.era.toFixed(2)}</td>
                  <td>{player2.pitchingStats.era.toFixed(2)}</td>
                  <td>{(player1.pitchingStats.era - player2.pitchingStats.era).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>WHIP</td>
                  <td>{player1.pitchingStats.whip.toFixed(2)}</td>
                  <td>{player2.pitchingStats.whip.toFixed(2)}</td>
                  <td>{(player1.pitchingStats.whip - player2.pitchingStats.whip).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>K/9</td>
                  <td>{player1.pitchingStats.kPer9.toFixed(1)}</td>
                  <td>{player2.pitchingStats.kPer9.toFixed(1)}</td>
                  <td>{(player1.pitchingStats.kPer9 - player2.pitchingStats.kPer9).toFixed(1)}</td>
                </tr>
                <tr>
                  <td>BB/9</td>
                  <td>{player1.pitchingStats.bbPer9.toFixed(1)}</td>
                  <td>{player2.pitchingStats.bbPer9.toFixed(1)}</td>
                  <td>{(player1.pitchingStats.bbPer9 - player2.pitchingStats.bbPer9).toFixed(1)}</td>
                </tr>
                <tr>
                  <td>Innings</td>
                  <td>{player1.pitchingStats.innings}</td>
                  <td>{player2.pitchingStats.innings}</td>
                  <td>{player1.pitchingStats.innings - player2.pitchingStats.innings}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            // Batter comparison table
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>{player1.name}</th>
                  <th>{player2.name}</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WAR</td>
                  <td>{player1.war.toFixed(1)}</td>
                  <td>{player2.war.toFixed(1)}</td>
                  <td>{(player1.war - player2.war).toFixed(1)}</td>
                </tr>
                <tr>
                  <td>AVG</td>
                  <td>{player1.battingStats.avg.toFixed(3)}</td>
                  <td>{player2.battingStats.avg.toFixed(3)}</td>
                  <td>{(player1.battingStats.avg - player2.battingStats.avg).toFixed(3)}</td>
                </tr>
                <tr>
                  <td>OBP</td>
                  <td>{player1.battingStats.obp.toFixed(3)}</td>
                  <td>{player2.battingStats.obp.toFixed(3)}</td>
                  <td>{(player1.battingStats.obp - player2.battingStats.obp).toFixed(3)}</td>
                </tr>
                <tr>
                  <td>SLG</td>
                  <td>{player1.battingStats.slg.toFixed(3)}</td>
                  <td>{player2.battingStats.slg.toFixed(3)}</td>
                  <td>{(player1.battingStats.slg - player2.battingStats.slg).toFixed(3)}</td>
                </tr>
                <tr>
                  <td>OPS</td>
                  <td>{player1.battingStats.ops.toFixed(3)}</td>
                  <td>{player2.battingStats.ops.toFixed(3)}</td>
                  <td>{(player1.battingStats.ops - player2.battingStats.ops).toFixed(3)}</td>
                </tr>
                <tr>
                  <td>HR</td>
                  <td>{player1.battingStats.hr}</td>
                  <td>{player2.battingStats.hr}</td>
                  <td>{player1.battingStats.hr - player2.battingStats.hr}</td>
                </tr>
                <tr>
                  <td>Exit Velocity</td>
                  <td>{player1.battingStats.exitVelo.toFixed(1)}</td>
                  <td>{player2.battingStats.exitVelo.toFixed(1)}</td>
                  <td>{(player1.battingStats.exitVelo - player2.battingStats.exitVelo).toFixed(1)}</td>
                </tr>
              </tbody>
            </table>
          )
        ) : (
          // Mixed player types - limited comparison
          <div className="mixed-comparison">
            <p className="comparison-note">
              Note: Detailed comparison is limited because one player is a pitcher and the other is a position player.
            </p>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>{player1.name}</th>
                  <th>{player2.name}</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WAR</td>
                  <td>{player1.war.toFixed(1)}</td>
                  <td>{player2.war.toFixed(1)}</td>
                  <td>{(player1.war - player2.war).toFixed(1)}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{player1.age}</td>
                  <td>{player2.age}</td>
                  <td>{player1.age - player2.age}</td>
                </tr>
                <tr>
                  <td>Service Time</td>
                  <td>{player1.serviceTime}</td>
                  <td>{player2.serviceTime}</td>
                  <td>{player1.serviceTime - player2.serviceTime}</td>
                </tr>
                <tr>
                  <td>WAR Projection</td>
                  <td>{player1.projectionStats.warProjection.toFixed(1)}</td>
                  <td>{player2.projectionStats.warProjection.toFixed(1)}</td>
                  <td>{(player1.projectionStats.warProjection - player2.projectionStats.warProjection).toFixed(1)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceComparison;
