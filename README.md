# ShieldGig AI
### AI-Powered Parametric Insurance for India's Gig Economy

## Problem Statement

India's platform-based delivery partners working for platforms like Swiggy, Zomato, Zepto, Amazon, and Flipkart form the backbone of the digital delivery ecosystem. However, external disruptions such as extreme weather conditions, severe pollution, floods, or government-imposed curfews can significantly reduce their working hours.

These disruptions can lead to **20–30% loss in weekly income**, and currently gig workers have **no financial safety net** to compensate for such income loss.

ShieldGig AI aims to solve this problem by providing **AI-powered parametric insurance** that automatically compensates delivery partners when verified external disruptions prevent them from working.

Unlike traditional insurance systems that require manual claims, ShieldGig AI enables **automated claim triggering and instant payouts** using AI-driven risk assessment and real-time disruption monitoring.

---

# Target Persona

Our platform focuses on **Food Delivery Partners** working with:

- Zomato
- Swiggy

### Typical Persona Example

Name: Rahul  
Age: 27  
City: Bangalore  
Platform: Swiggy  
Average Daily Earnings: ₹900  
Average Weekly Earnings: ₹6300  

### Challenges Faced

- Heavy rainfall reduces order volumes
- Flooded roads prevent deliveries
- Heatwaves make long hours unsafe
- Pollution alerts reduce outdoor activity

These disruptions directly impact **daily delivery volume and income**.

ShieldGig AI protects delivery partners against these income losses.

---

# Solution Overview

ShieldGig AI is a **parametric insurance platform** that:

1. Monitors environmental and social disruptions
2. Predicts potential income loss using AI models
3. Automatically triggers claims when conditions are met
4. Instantly compensates the worker for lost income

The platform eliminates the need for **manual claim filing**, creating a **zero-touch insurance experience**.

---

# Application Workflow

### 1. Worker Onboarding

Delivery partners register on the platform by providing:

- Name
- Phone number
- Delivery platform (Swiggy/Zomato)
- Operating city
- Delivery zone
- Average daily working hours
- Average weekly earnings
- UPI ID for payouts

This information is used to create a **risk profile** for the worker.

---

### 2. AI Risk Profiling

The system evaluates the worker’s delivery zone using multiple data sources:

- Historical weather patterns
- Flood-prone areas
- Pollution data
- Traffic congestion
- Delivery demand patterns

The AI model generates a **Risk Score** for the worker's operating zone.

Example:

Risk Score = 0.65  
Zone Type = Moderate Risk Area

---

### 3. Weekly Premium Calculation

The insurance model uses a **Weekly Pricing Structure**, aligning with the typical earnings cycle of gig workers.

Example Formula:

Base Premium = ₹30/week

Risk Multiplier = 1 + Risk Score

Premium Calculation:

Premium = Base Premium × (1 + Risk Score)

Example:

Premium = 30 × (1 + 0.65)  
Weekly Premium = ₹49.5 ≈ ₹50/week

Workers can activate coverage on a **weekly subscription basis**.

---

### 4. Parametric Trigger Monitoring

ShieldGig AI continuously monitors external disruption indicators using APIs.

Example triggers include:

| Disruption Type | Trigger Condition |
|-----------------|------------------|
| Heavy Rain | Rainfall > 50 mm |
| Extreme Heat | Temperature > 42°C |
| Flood Warning | Government flood alert |
| Pollution | AQI > 350 |
| Curfew / Strike | Official government notification |

When these thresholds are crossed, the system automatically evaluates income impact.

---

### 5. Income Loss Detection

The system estimates expected earnings using historical delivery patterns.

Example:

Expected deliveries = 25/day  
Actual deliveries during disruption = 12/day  

Estimated income loss = ₹800

---

### 6. Automatic Claim Triggering

If disruption thresholds are met and income drop is detected, the system automatically initiates a claim.

Example payout calculation:

Income loss = ₹800  
Coverage ratio = 70%

Payout = ₹560

This process requires **no manual claim submission by the worker**.

---

### 7. Instant Payout Processing

The payout is transferred instantly through integrated payment systems.

Example payment methods:

- UPI
- Razorpay sandbox
- Payment gateway APIs

This ensures that workers receive financial support immediately.

---

# AI & Machine Learning Integration

ShieldGig AI integrates multiple AI components to enhance risk prediction and fraud prevention.

## 1. Dynamic Risk Assessment

Machine learning models analyze:

- Weather history
- Location risk factors
- Delivery demand fluctuations

Models considered:

- Random Forest
- Gradient Boosting
- XGBoost

Output:

Risk score used to dynamically calculate weekly premiums.

---

## 2. Fraud Detection System

To prevent misuse of the system, anomaly detection models monitor suspicious claim patterns.

Fraud checks include:

- GPS spoofing detection
- Duplicate claim detection
- Cross-verification with weather data
- Worker activity validation

Model Used:

Isolation Forest for anomaly detection.

---

## 3. Predictive Disruption Alerts

AI models predict upcoming disruptions based on weather forecasts.

Example:

"Heavy rain expected tomorrow in your delivery zone. Insurance coverage will be automatically activated."

This helps workers prepare for potential income disruptions.

---

# Platform Choice: Web Application

For the prototype phase, we chose a **Web Platform** because:

- Faster development cycle
- Easy deployment
- Accessible across devices
- Simplified integration with APIs

In production, this can evolve into a **mobile application** for better accessibility among gig workers.

---

# System Architecture

Frontend Layer  
React.js + TailwindCSS

Backend Layer  
Node.js + Express.js

Database  
MongoDB

AI Microservice  
Python + FastAPI + Scikit-Learn

External APIs  
Weather APIs  
Air Quality APIs  
Traffic APIs (mocked)

Payment Integration  
Razorpay Sandbox / UPI Simulation

---

# Core Features

Worker Onboarding System  
AI Risk Profiling  
Dynamic Weekly Premium Calculation  
Automated Parametric Claim Triggers  
Fraud Detection System  
Instant Payout Simulation  
Analytics Dashboard

---

# Dashboard Features

### Worker Dashboard

- Active policy status
- Weekly premium details
- Income protected
- Recent disruptions detected
- Claim history
- Payout history

### Admin Dashboard

- Active insured workers
- Claims triggered per disruption
- Fraud alerts
- Risk zone analysis
- Weekly payout analytics

---

# Development Plan

### Phase 1 (Ideation & Foundation)

- Define persona and workflow
- Design system architecture
- Create prototype UI
- Implement onboarding flow
- Define AI strategy and pricing model

### Phase 2 (Automation & Protection)

- Implement policy management
- Dynamic premium calculation
- Automated parametric triggers
- Claim management system

### Phase 3 (Scale & Optimization)

- Fraud detection models
- Instant payout simulation
- Advanced analytics dashboard
- Full system demo and testing

---

# Expected Impact

ShieldGig AI provides a safety net for gig workers by protecting their income during unavoidable disruptions.

Benefits include:

- Financial stability for gig workers
- Automated insurance processing
- Reduced claim fraud
- Faster payouts
- Data-driven risk management

This platform demonstrates how **AI-powered parametric insurance** can transform financial protection for India's rapidly growing gig economy.

---

# Repository Structure
/frontend → React application
/backend → Node.js API
/ai-service → Python ML services
/docs → architecture and diagrams


---

# Future Enhancements

- Mobile app for gig workers
- Integration with delivery platform APIs
- Advanced predictive disruption models
- Real-time delivery activity tracking
- Blockchain-based transparent claims

---

# Team

Project developed as part of **Guidewire DEVTrails 2026 Hackathon**.

Team: Brogrammers