# MLB Analytics Platform

## Overview

The MLB Analytics Platform is a comprehensive suite of tools designed to analyze player performance, compare players, and assess player value in Major League Baseball. This platform demonstrates modern approaches to sports analytics by combining data science, interactive visualization, and web development.

## Key Components

### 1. Interactive Player Comparison Tool (React Application)

A modern, interactive web application built with React that allows users to:
- Compare any two MLB players (both hitters and pitchers)
- Visualize performance metrics using radar charts and bar graphs
- Analyze value metrics including salary efficiency and market value
- View detailed statistical breakdowns and projections
- Assess potential trades with value differential analysis

**Technologies Used:**
- React.js
- Chart.js for data visualization
- Modern CSS with responsive design

### 2. Static Player Comparison Tool (HTML/JS)

A lightweight, portable HTML application that:
- Works completely offline without any server requirements
- Provides visual comparisons of player statistics
- Includes radar charts for performance visualization
- Offers a simple, clean interface for quick analysis

**Technologies Used:**
- HTML5
- JavaScript
- Plotly.js for interactive charts

### 3. Data Analysis Notebooks

Jupyter notebooks that demonstrate:
- Advanced statistical analysis of MLB player performance
- Player valuation modeling using machine learning
- Expected vs. actual performance analysis
- Pitch effectiveness and outcome prediction

### 4. API Backend (FastAPI)

A scalable API built with FastAPI that:
- Provides endpoints for player data, team statistics, and predictions
- Enables integration with external data sources
- Supports the frontend applications with structured data

## Getting Started

### Running the React Application

1. Navigate to the react-app directory:
   ```
   cd react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Using the Static HTML Tool

Simply open the `frontend/static_player_comparison.html` file in any modern web browser.

### Exploring the Notebooks

The `notebooks` directory contains Jupyter notebooks for:
- Player performance analysis
- Player valuation modeling

## Project Structure

```
MLB-Analytics-Platform/
├── backend/               # FastAPI backend for data serving
├── frontend/              # Frontend applications
│   ├── static_player_comparison.html  # Static HTML tool
│   └── data_generator.py  # Mock data generation
├── notebooks/             # Jupyter notebooks for analysis
│   ├── data_exploration/  # Performance analysis notebooks
│   └── model_development/ # Valuation model notebooks
└── react-app/             # React player comparison application
```

## Future Enhancements

- Integration with real-time MLB data sources
- Advanced predictive modeling for player projections
- Team roster optimization tools
- Draft analysis and prospect valuation
- Expanded pitcher analysis with advanced metrics

## Contact

For more information about this project, please contact:
- [Your Name]
- [Your Email]
- [Your LinkedIn/GitHub]
