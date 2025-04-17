# MLB Player Comparison Tool - Preview

## What This Tool Does

The MLB Player Comparison Tool is a web application that allows front office personnel to visually compare two players across multiple dimensions:

1. **Overview Comparison**
   - Side-by-side player cards with basic information
   - Radar chart showing relative strengths in key metrics
   - Position-specific statistics (batting or pitching)

2. **Detailed Statistical Comparison**
   - Comprehensive table of all relevant metrics
   - Bar charts highlighting key performance differences
   - Normalized comparisons accounting for different player types

3. **Value Analysis**
   - Salary vs. market value comparison
   - WAR/$ efficiency metrics
   - Value differential assessment
   - Trade analysis with recommendations
   - Future projection comparison with uncertainty visualization

## Sample Screenshots (Mockups)

### Overview Tab
```
+----------------------------------+----------------------------------+
| Aaron Judge                      | Shohei Ohtani                    |
| Team: NYY | Position: RF         | Team: LAD | Position: DH/SP      |
| Age: 32 | Service Time: 8 years  | Age: 30 | Service Time: 6 years  |
| WAR: 7.2                         | WAR: 8.5                         |
| Salary: $36.5M                   | Salary: $45.0M                   |
|                                  |                                  |
| Batting Stats                    | Batting/Pitching Stats           |
| AVG/OBP/SLG: .294/.422/.613     | AVG/OBP/SLG: .304/.412/.654      |
| wRC+: 175                        | wRC+: 182                        |
| HR: 45                           | HR: 38                           |
| Exit Velocity: 95.8 mph          | ERA: 2.85 (as pitcher)           |
+----------------------------------+----------------------------------+

[RADAR CHART SHOWING PLAYER STRENGTHS ACROSS 6 KEY METRICS]
```

### Detailed Comparison Tab
```
+-------------------+---------------+---------------+
| Metric            | Aaron Judge   | Shohei Ohtani |
+-------------------+---------------+---------------+
| WAR               | 7.2           | 8.5           |
| Batting Average   | .294          | .304          |
| OBP               | .422          | .412          |
| SLG               | .613          | .654          |
| wRC+              | 175           | 182           |
| Home Runs         | 45            | 38            |
| Exit Velocity     | 95.8          | 92.5          |
| Market Value      | $57.6M        | $68.0M        |
| Value Differential| $21.1M        | $23.0M        |
+-------------------+---------------+---------------+

[BAR CHART COMPARING KEY METRICS BETWEEN PLAYERS]
```

### Value Analysis Tab
```
+----------------------------------+----------------------------------+
| Value Metrics - Aaron Judge      | Value Metrics - Shohei Ohtani    |
| Salary: $36.5M                   | Salary: $45.0M                   |
| Market Value: $57.6M             | Market Value: $68.0M             |
| Value Differential: $21.1M       | Value Differential: $23.0M       |
| WAR/$ Ratio: 0.20 WAR per $M     | WAR/$ Ratio: 0.19 WAR per $M     |
| Contract Years: 8                | Contract Years: 10               |
|                                  |                                  |
| Assessment: Moderately undervalued| Assessment: Moderately undervalued|
+----------------------------------+----------------------------------+

[BAR CHART COMPARING SALARY VS MARKET VALUE]

[PROJECTION CHART WITH UNCERTAINTY RANGES]

Trade Assessment: This would be a relatively even trade in terms of value.

Additional Trade Considerations:
- Ohtani offers unique two-way value that isn't fully captured in traditional metrics
- Judge is 2 years older than Ohtani, which affects long-term value
- Ohtani's injury risk is higher due to two-way player demands
```

## How To Install and Run

1. **Install Python** (if not already installed)
   - Download from python.org (version 3.8 or higher recommended)

2. **Install required packages**
   ```
   pip install streamlit pandas numpy matplotlib seaborn plotly scikit-learn
   ```

3. **Run the application**
   ```
   cd C:\Users\Michael\Documents\GitHub\MLB-Analytics-Platform\frontend
   streamlit run player_comparison_app.py
   ```

4. **Access in browser**
   - The app will automatically open in your default web browser
   - If not, navigate to http://localhost:8501

## Integration with Your MLB Analytics Platform

This tool complements your existing notebooks by:

1. Making your analysis interactive and accessible to non-technical stakeholders
2. Providing visual comparisons that highlight the insights from your models
3. Offering a practical application of your player valuation framework
4. Demonstrating how your analytics can inform front office decisions

The tool uses the same data models and valuation algorithms developed in your notebooks, ensuring consistency across the platform.
