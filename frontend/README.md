# MLB Player Comparison Tool

A Streamlit web application that allows MLB front office personnel to compare two players across various metrics with interactive visualizations.

## Features

- **Player Selection**: Filter and select players by position and team
- **Overview Tab**: Quick comparison of key stats with radar chart visualization
- **Detailed Comparison Tab**: Comprehensive statistical comparison with bar charts
- **Value Analysis Tab**: Salary vs. market value analysis with trade recommendations

## Screenshots

![Player Comparison Overview](../docs/images/player_comparison_overview.png)
*Note: Screenshot will be available after first run*

## Installation

1. Make sure you have Python 3.8+ installed
2. Install the required packages:

```bash
pip install -r requirements.txt
```

## Usage

Run the Streamlit app with:

```bash
streamlit run player_comparison_app.py
```

The app will open in your default web browser at http://localhost:8501

## Data

This application uses simulated MLB player data that mimics realistic 2024 MLB season statistics. The data includes:

- Player demographics (name, team, position, age)
- Contract information (salary, service time)
- Performance metrics (WAR, batting/pitching statistics)
- Advanced metrics (Statcast data, projections)
- Value assessments (market value, value differential)

## How It Works

1. **Data Generation**: The `data_generator.py` file creates realistic MLB player data
2. **Interactive UI**: Streamlit provides the web interface with interactive components
3. **Visualization**: Plotly and Matplotlib create dynamic charts and comparisons
4. **Analysis**: Built-in algorithms calculate player value and trade recommendations

## Integration with MLB Analytics Platform

This tool is part of the larger MLB Analytics Platform, which includes:

- Player Performance Analysis notebooks
- Player Valuation Model notebooks
- Backend API services

Front office personnel can use this tool alongside the analytical notebooks to make data-driven decisions about player acquisition, development, and roster construction.
