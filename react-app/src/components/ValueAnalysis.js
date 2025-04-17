import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './ValueAnalysis.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ValueAnalysis = ({ player1, player2 }) => {
  // Value assessment helper function
  const getValueAssessment = (player) => {
    if (player.valueDiff > 20) {
      return {
        text: "Significantly undervalued",
        class: "positive"
      };
    } else if (player.valueDiff > 10) {
      return {
        text: "Moderately undervalued",
        class: "positive"
      };
    } else if (player.valueDiff > 0) {
      return {
        text: "Slightly undervalued",
        class: "positive"
      };
    } else if (player.valueDiff > -10) {
      return {
        text: "Fairly valued",
        class: "neutral"
      };
    } else {
      return {
        text: "Overvalued",
        class: "negative"
      };
    }
  };
  
  // Get assessments
  const player1Assessment = getValueAssessment(player1);
  const player2Assessment = getValueAssessment(player2);
  
  // Prepare value comparison chart data
  const valueData = {
    labels: [player1.name, player2.name],
    datasets: [
      {
        label: 'Salary ($M)',
        data: [player1.salary, player2.salary],
        backgroundColor: 'rgba(0, 45, 114, 0.8)',
      },
      {
        label: 'Market Value ($M)',
        data: [player1.marketValue, player2.marketValue],
        backgroundColor: 'rgba(227, 25, 55, 0.8)',
      }
    ]
  };
  
  // Chart options
  const valueOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Salary vs. Market Value',
      },
    },
  };
  
  // Prepare projection chart data
  const projectionData = {
    labels: [player1.name, player2.name],
    datasets: [
      {
        label: 'Current WAR',
        data: [player1.war, player2.war],
        backgroundColor: 'rgba(0, 45, 114, 0.8)',
      },
      {
        label: 'Projected WAR',
        data: [player1.projectionStats.warProjection, player2.projectionStats.warProjection],
        backgroundColor: 'rgba(227, 25, 55, 0.8)',
      }
    ]
  };
  
  // Trade analysis
  const getTradeAnalysis = () => {
    const p1Surplus = player1.valueDiff;
    const p2Surplus = player2.valueDiff;
    
    if (Math.abs(p1Surplus - p2Surplus) < 5) {
      return {
        text: "This would be a relatively even trade in terms of value.",
        class: "neutral"
      };
    } else if (p1Surplus > p2Surplus) {
      return {
        text: `${player1.name}'s team would be giving up approximately $${(p1Surplus - p2Surplus).toFixed(1)}M in surplus value in this trade.`,
        class: "negative"
      };
    } else {
      return {
        text: `${player2.name}'s team would be giving up approximately $${(p2Surplus - p1Surplus).toFixed(1)}M in surplus value in this trade.`,
        class: "negative"
      };
    }
  };
  
  const tradeAnalysis = getTradeAnalysis();
  
  // Additional trade considerations
  const getTradeConsiderations = () => {
    const considerations = [];
    
    // Age considerations
    if (Math.abs(player1.age - player2.age) > 5) {
      const olderPlayer = player1.age > player2.age ? player1.name : player2.name;
      const youngerPlayer = player1.age > player2.age ? player2.name : player1.name;
      considerations.push(`${youngerPlayer} is significantly younger than ${olderPlayer}, which affects long-term value.`);
    }
    
    // Service time considerations
    if (Math.abs(player1.serviceTime - player2.serviceTime) > 3) {
      const moreService = player1.serviceTime > player2.serviceTime ? player1.name : player2.name;
      const lessService = player1.serviceTime > player2.serviceTime ? player2.name : player1.name;
      considerations.push(`${lessService} has significantly more team control remaining than ${moreService}.`);
    }
    
    // Contract considerations
    if (Math.abs(player1.contractYears - player2.contractYears) > 3) {
      const longerContract = player1.contractYears > player2.contractYears ? player1.name : player2.name;
      const shorterContract = player1.contractYears > player2.contractYears ? player2.name : player1.name;
      considerations.push(`${longerContract} has a significantly longer contract than ${shorterContract}, affecting financial flexibility.`);
    }
    
    // Position considerations
    if (player1.isPitcher !== player2.isPitcher) {
      considerations.push(`This trade involves different player types (pitcher vs. position player), making direct comparison difficult.`);
    }
    
    return considerations;
  };
  
  const tradeConsiderations = getTradeConsiderations();
  
  return (
    <div className="value-analysis">
      <div className="value-cards">
        <div className="value-card">
          <h3>Value Metrics - {player1.name}</h3>
          <p><strong>Salary:</strong> ${player1.salary.toFixed(1)}M</p>
          <p><strong>Market Value:</strong> ${player1.marketValue.toFixed(1)}M</p>
          <p><strong>Value Differential:</strong> ${player1.valueDiff.toFixed(1)}M</p>
          <p><strong>WAR/$ Ratio:</strong> {(player1.war / player1.salary).toFixed(2)} WAR per $M</p>
          <p><strong>Contract Years:</strong> {player1.contractYears}</p>
          
          <div className={`assessment ${player1Assessment.class}`}>
            <strong>Assessment:</strong> {player1Assessment.text}
          </div>
        </div>
        
        <div className="value-card">
          <h3>Value Metrics - {player2.name}</h3>
          <p><strong>Salary:</strong> ${player2.salary.toFixed(1)}M</p>
          <p><strong>Market Value:</strong> ${player2.marketValue.toFixed(1)}M</p>
          <p><strong>Value Differential:</strong> ${player2.valueDiff.toFixed(1)}M</p>
          <p><strong>WAR/$ Ratio:</strong> {(player2.war / player2.salary).toFixed(2)} WAR per $M</p>
          <p><strong>Contract Years:</strong> {player2.contractYears}</p>
          
          <div className={`assessment ${player2Assessment.class}`}>
            <strong>Assessment:</strong> {player2Assessment.text}
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <h3>Value Comparison</h3>
        <Bar data={valueData} options={valueOptions} />
      </div>
      
      <div className="chart-container">
        <h3>Future Projection Comparison</h3>
        <Bar data={projectionData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Current vs. Projected WAR',
            },
          },
        }} />
        <div className="projection-note">
          <p>
            <strong>Projection Uncertainty:</strong> {player1.name}: ±{(player1.projectionStats.uncertainty * 100).toFixed(0)}%, 
            {player2.name}: ±{(player2.projectionStats.uncertainty * 100).toFixed(0)}%
          </p>
        </div>
      </div>
      
      <div className="trade-analysis">
        <h3>Trade Analysis</h3>
        
        <div className={`assessment ${tradeAnalysis.class}`}>
          <strong>Trade Assessment:</strong> {tradeAnalysis.text}
        </div>
        
        <h3>Additional Trade Considerations</h3>
        {tradeConsiderations.length > 0 ? (
          <ul className="considerations-list">
            {tradeConsiderations.map((consideration, index) => (
              <li key={index}>{consideration}</li>
            ))}
          </ul>
        ) : (
          <p>No significant additional considerations for this trade.</p>
        )}
      </div>
    </div>
  );
};

export default ValueAnalysis;
