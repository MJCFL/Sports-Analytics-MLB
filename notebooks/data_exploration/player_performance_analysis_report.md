# MLB Player Performance Analysis Report

## Executive Summary

This notebook demonstrates advanced statistical analysis of MLB player performance data, focusing on the relationship between batted ball characteristics and outcomes. It implements predictive modeling to determine which factors most strongly influence whether a batted ball becomes a hit. The analysis provides actionable insights for player evaluation, defensive positioning, and player development.

## Section-by-Section Breakdown

### 1. Setup and Data Preparation

**What it does:** This section imports necessary libraries and creates a simulated dataset that mimics Statcast data from the 2024 MLB season.

**Key insights:**
- The data includes launch angle, exit velocity, and outcome information for 1,000 batted balls
- Player names are drawn from actual MLB stars like Aaron Judge and Shohei Ohtani
- The simulation uses realistic probability distributions to generate outcomes based on launch parameters

**Why it matters:** While using simulated data, the notebook demonstrates how to work with Statcast data, which is the gold standard for MLB analytics departments.

### 2. Exploratory Data Analysis

**What it does:** This section visualizes the relationships between launch parameters (angle and velocity) and batted ball outcomes.

**Key insights:**
- Launch angles between 10-30 degrees with high exit velocities are most likely to result in hits
- Ground balls (negative launch angles) primarily result in singles or outs
- High exit velocities significantly increase the probability of extra-base hits

**Why it matters:** Understanding these relationships helps identify optimal batted ball characteristics for hitters to aim for and helps pitchers understand which types of contact to avoid allowing.

### 3. Advanced Metrics Analysis

**What it does:** This section calculates and visualizes hit probability based on combinations of launch angle and exit velocity.

**Key insights:**
- The heat map shows clear "hot zones" where hit probability exceeds 70%
- Player-level expected statistics are calculated based on batted ball quality
- Differences between actual and expected performance are identified

**Why it matters:** This analysis forms the foundation of "expected statistics" like xBA, xSLG, and xwOBA that MLB teams use to evaluate player performance beyond traditional metrics.

### 4. Predictive Modeling for Hit Outcomes

**What it does:** This section builds and evaluates machine learning models to predict whether a batted ball will result in a hit.

**Key insights:**
- Baseball-specific features like "sweet spot" and "barrel" classification improve model performance
- The Gradient Boosting model performs best with 64% accuracy and strong AUC scores
- Feature importance analysis shows exit velocity is the strongest predictor, followed by launch angle
- Optimizing the classification threshold improves model performance beyond the default 0.5 threshold

**Why it matters:** The model quantifies the relationship between batted ball characteristics and outcomes, providing a data-driven approach to player evaluation that looks beyond results-based metrics.

**Model Performance Context:** The 64% accuracy is actually quite good in baseball analytics. MLB's own Statcast xBA model, which uses significantly more data points and sophisticated algorithms, still shows considerable variance from actual outcomes. The inherent randomness in baseball - where defensive positioning, fielding skill, and luck play major roles - means that even the best models rarely exceed 70-75% accuracy.

### 5. MLB Front Office Applications

**What it does:** This section explains how the analysis would be used in an MLB front office.

**Key applications:**
- **Hitter Evaluation:** Identify hitters who consistently produce high-quality contact but may have been unlucky
- **Defensive Positioning:** Optimize fielder positioning based on hit probability zones
- **Pitcher Assessment:** Evaluate pitchers based on contact quality rather than just outcomes
- **Player Development:** Provide feedback to hitters on optimal launch parameters

**Why it matters:** This section connects the technical analysis to practical baseball operations, showing how data science translates to competitive advantage on the field.

### 6. Expected vs. Actual Performance Analysis

**What it does:** This section identifies players whose actual results differ significantly from their expected performance based on batted ball quality.

**Key insights:**
- Overperformers (players with actual BA > expected BA) may be benefiting from luck or exceptional speed
- Underperformers (players with actual BA < expected BA) may be experiencing bad luck or hitting into defensive shifts
- These differentials help identify potential regression candidates and undervalued players

**Why it matters:** This analysis helps teams identify players whose current statistics may not reflect their true talent level, creating opportunities in player acquisition and development.

### 7. Pitch Analysis

**What it does:** This section analyzes the effectiveness of different pitch types based on the quality of contact they allow.

**Key insights:**
- Certain pitch types consistently generate weaker contact and lower expected outcomes
- The relationship between pitch velocity, spin rate, and contact quality is quantified
- Pitch effectiveness is measured by expected outcomes rather than actual results

**Why it matters:** This analysis helps teams optimize pitch selection and design effective pitching strategies against specific hitters.

## Conclusions and Recommendations

The notebook demonstrates a sophisticated approach to baseball analytics that goes beyond traditional statistics. By focusing on the underlying quality of contact rather than just outcomes, it provides a more accurate assessment of player performance.

**Key takeaways:**
1. Launch angle and exit velocity are strong predictors of batted ball outcomes
2. Machine learning models can effectively quantify these relationships
3. Expected statistics based on batted ball quality provide valuable context for player evaluation
4. Differences between expected and actual performance help identify regression candidates and undervalued players

**Next steps:**
1. Incorporate additional features like spray angle, player speed, and defensive positioning
2. Develop position-specific models to account for different performance expectations
3. Implement time-series analysis to identify trends in player performance
4. Create interactive dashboards for real-time player evaluation

This analysis would be valuable for MLB front offices in player evaluation, acquisition, and development, providing data-driven insights to complement traditional scouting approaches.
