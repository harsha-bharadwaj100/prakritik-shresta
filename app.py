from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Simulated data for a specific location (e.g., Guwahati, Assam)
# In a real app, this would come from your AI models and data processing pipeline.
SIMULATED_DATA = {
    2020: {
        "metrics": {
            "urban_growth": "2.1%",
            "deforestation_rate": "1.5%",
            "water_body_change": "-0.8%",
        },
        "prediction": "Moderate urban expansion expected towards the southwest. Riverbank erosion risk is elevated.",
        "xai_insights": {
            "top_contributor": "Proximity to new highways (for urban growth)",
            "factors": [
                "NDBI increase",
                "NDWI decrease",
                "Historical expansion patterns",
            ],
        },
        "hotspot_coords": [26.1445, 91.7362],  # Guwahati coordinates
    },
    2021: {
        "metrics": {
            "urban_growth": "2.5%",
            "deforestation_rate": "1.8%",
            "water_body_change": "-1.1%",
        },
        "prediction": "Increased deforestation projected in the northern hills. High probability of localized flooding during monsoon.",
        "xai_insights": {
            "top_contributor": "Anomalous rainfall patterns (for flood risk)",
            "factors": [
                "High precipitation data",
                "Vegetation loss",
                "Soil moisture index",
            ],
        },
        "hotspot_coords": [26.1800, 91.7500],  # Northern area
    },
    2022: {
        "metrics": {
            "urban_growth": "3.2%",
            "deforestation_rate": "2.0%",
            "water_body_change": "-1.5%",
        },
        "prediction": "Aggressive infrastructure development likely. Significant loss of agricultural land predicted.",
        "xai_insights": {
            "top_contributor": "Government infrastructure projects (for land use change)",
            "factors": [
                "New road construction data",
                "Land cover classification",
                "Population density increase",
            ],
        },
        "hotspot_coords": [26.1000, 91.6900],  # Southwest area
    },
    2025: {
        "metrics": {
            "urban_growth": "2.8%",
            "deforestation_rate": "1.7%",
            "water_body_change": "-1.2%",
        },
        "prediction": "Stabilizing growth, but continued pressure on green belts. Afforestation efforts show minor positive impact.",
        "xai_insights": {
            "top_contributor": "Afforestation policies (for mitigating deforestation)",
            "factors": [
                "NDVI stabilization",
                "Policy implementation data",
                "Reduced clear-cutting activity",
            ],
        },
        "hotspot_coords": [26.1445, 91.7362],  # Back to central
    },
}


@app.route("/")
def home():
    """Serves the main HTML page."""
    return render_template("index.html")


@app.route("/api/data/<int:year>")
def get_data(year):
    """Provides simulated data for a given year."""
    data = SIMULATED_DATA.get(year)
    if not data:
        # Return a default or error response if the year is not in our data
        return jsonify({"error": "No data available for this year"}), 404
    return jsonify(data)


if __name__ == "__main__":
    # You need to specify the static folder for CSS/JS if it's not the default `static`
    app.run(debug=True)
