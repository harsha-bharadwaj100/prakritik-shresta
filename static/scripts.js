document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Element References ---
  const timeSlider = document.getElementById("time-slider");
  const timeLabel = document.getElementById("time-label");
  const currentYearMap = document.getElementById("current-year-map");

  // Data display elements
  const metricsList = document.getElementById("metrics-list");
  const predictionText = document.getElementById("prediction-text");
  const xaiTopContributor = document.getElementById("xai-top-contributor");
  const xaiFactorsList = document.getElementById("xai-factors-list");
  const dataPanel = document.getElementById("data-panel");

  // --- Leaflet Map Initialization ---
  // Initialize map centered on Guwahati
  const map = L.map("map").setView([26.1445, 91.7362], 10);

  // Add a tile layer from OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker for the "hotspot" of change
  const hotspotMarker = L.marker([26.1445, 91.7362], {
    title: "Change Hotspot",
  }).addTo(map);

  // --- Data Fetching and UI Update Function ---
  async function updateDashboard(year) {
    // Update labels immediately for responsiveness
    timeLabel.textContent = `Year: ${year}`;
    currentYearMap.textContent = year;

    try {
      const response = await fetch(`/api/data/${year}`);
      if (!response.ok) {
        // Display error message in the panel
        dataPanel.innerHTML = `<p style="color: red;">No data available for ${year}.</p>`;
        return;
      }
      const data = await response.json();

      // 1. Update Map
      const newCoords = data.hotspot_coords;
      map.panTo(newCoords);
      hotspotMarker
        .setLatLng(newCoords)
        .bindPopup(`<b>Change Hotspot for ${year}</b>`)
        .openPopup();

      // 2. Update Metrics
      metricsList.innerHTML = ""; // Clear previous metrics
      for (const [key, value] of Object.entries(data.metrics)) {
        const li = document.createElement("li");
        // Format key for display: 'urban_growth' -> 'Urban Growth'
        const formattedKey = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
        li.textContent = `${formattedKey}: ${value}`;
        metricsList.appendChild(li);
      }

      // 3. Update Prediction
      predictionText.textContent = data.prediction;

      // 4. Update XAI Insights
      xaiTopContributor.textContent = data.xai_insights.top_contributor;
      xaiFactorsList.innerHTML = ""; // Clear previous factors
      data.xai_insights.factors.forEach((factor) => {
        const li = document.createElement("li");
        li.textContent = factor;
        xaiFactorsList.appendChild(li);
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
      dataPanel.innerHTML = `<p style="color: red;">Failed to load data. Check console.</p>`;
    }
  }

  // --- Event Listener ---
  timeSlider.addEventListener("input", (event) => {
    updateDashboard(event.target.value);
  });

  // --- Initial Load ---
  // Load data for the default year when the page opens
  updateDashboard(timeSlider.value);
});
