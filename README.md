# Prakritik Shresta: Environmental Change Monitoring

**Prakritik Shresta** is an advanced AI-driven platform for near real-time monitoring, analysis, and prediction of environmental and land-use changes.  
By leveraging temporal satellite imagery, our solution provides actionable insights for disaster management, sustainable urban planning, and environmental conservation.

This repository contains the functional prototype developed for the hackathon, demonstrating the core architecture and user-facing dashboard.

---

## Beta Design
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/99030b93-d7ec-4dcd-9b10-e521570152f3" />

## 🌍 Core Capabilities of the Prototype

The current prototype provides a glimpse into the full potential of Prakritik Shresta, showcasing the following key features through an **interactive dashboard**:

### 1. Interactive Map Interface
A dynamic map (powered by **Leaflet.js**) serves as the central visualization tool, allowing users to explore a selected region of interest (e.g., *Guwahati, Assam*).

### 2. Temporal Change Analysis
A **time-slider** enables users to navigate through different years (2020–2025) to observe simulated environmental changes.  
The map dynamically pans to *hotspots* of significant activity for each year.

### 3. Data-Driven Insights
For each selected year, the dashboard displays:

- **Key Metrics**: Quantitative data on critical indicators like urban growth, deforestation rates, and water body changes.  
- **AI-Generated Predictions**: Plain-language forecasts of future trends, such as projected urban expansion or potential climate risks.  
- **Explainable AI (XAI)**: Insights into the model's reasoning, highlighting the primary drivers (e.g., *"Proximity to new highways"*) and contributing factors (e.g., *"NDBI increase"*, *"Anomalous rainfall"*) behind its predictions.

### 4. Client-Server Architecture
Built with a robust **Flask** backend serving a RESTful API and a responsive **vanilla JavaScript** frontend, demonstrating a scalable and modern web architecture.

---

## 🚀 How We Stand Out: Our Innovative Edge

While various GIS tools exist, **Prakritik Shresta’s** innovation lies in its **unique, integrated approach** that will be fully realized in the final version:

| **Feature**          | **Traditional Solutions** | **Prakritik Shresta's Approach** |
|----------------------|--------------------------|----------------------------------|
| **Data Analysis**    | Manual, requires GIS expertise, and is often disconnected from decision-making. | **Automated & Integrated**: An end-to-end pipeline that ingests, processes, and analyzes data automatically, presenting results in an accessible dashboard. |
| **Focus**            | Primarily focused on past change detection (what has already happened). | **Predictive & Proactive**: Forecasting future changes (urban sprawl, deforestation risks) to enable preemptive action. |
| **Recommendations**  | Data is presented without clear guidance, leaving interpretation to the user. | **Actionable Intelligence**: Generates concrete, evidence-based control suggestions (e.g., *"Implement green buffer zones in Sector 7"*, *"Reinforce riverbanks at coordinates X, Y"*). |
| **Transparency**     | AI models are often "black boxes," making it hard for policymakers to trust their outputs. | **Built-in Explainable AI (XAI)**: Shows why a prediction was made, fostering trust and confident decision-making. |
| **Accessibility**    | Complex software with a steep learning curve, limited to technical experts. | **SaaS Model**: An intuitive, web-based platform designed for non-technical users like government officials, NGOs, and community leaders. |
| **Impact Visualization** | Static maps and charts that may fail to convey urgency. | **Simulated Futures**: Realistic visual simulations of potential future landscapes to make the impact tangible and compelling. |

---

## 🔮 Future Enhancements: The Path Forward

This prototype is the foundation for a much larger vision. Our development roadmap includes:

1. **Real-Time Data Integration**  
   Connect to live satellite data streams from **Sentinel Hub** and **Google Earth Engine** for up-to-the-minute analysis.

2. **Advanced AI Models**  
   Implement deep learning architectures such as **U-Net** for segmentation and **LSTMs** for time-series forecasting to improve change detection and prediction accuracy.

3. **Scalable Geographic Coverage**  
   Expand to global monitoring capabilities with automated pipelines for different regions.

4. **Multi-Factor Analysis**  
   Integrate socio-economic data, climate models (ERA5), and infrastructure plans for a holistic predictive model.

5. **Automated Alerting System**  
   Send notifications via email or SMS when significant or anomalous changes are detected.

6. **Full-Fledged Recommendation Engine**  
   Provide detailed, AI-driven policy and intervention suggestions based on predictive analytics.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, Leaflet.js  
- **Backend**: Flask, RESTful API  
- **AI/ML**: Explainable AI, Predictive Modeling (planned: U-Net, LSTM)  
- **Data Sources**: Temporal satellite imagery (Sentinel Hub, GEE planned)  
- **Architecture**: Client-Server with SaaS deployment vision

---

## 📌 Summary

Prakritik Shresta aims to **transform environmental monitoring from reactive to proactive**, giving policymakers, NGOs, and communities the tools to **see changes before they happen** and act decisively.
