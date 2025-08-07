document.addEventListener("DOMContentLoaded", () => {
  const timeSlider = document.getElementById("time-slider");
  const timeLabel = document.getElementById("time-label");
  const predPlace = document.getElementById("predictions-placeholder");
  const xaiPlace = document.getElementById("xai-placeholder");
  const predSpan = document.getElementById("current-pred");
  const xaiSpan = document.getElementById("current-xai");

  const updateYearDisplay = (year) => {
    timeLabel.textContent = `Year: ${year}`;
    predSpan.textContent = year;
    xaiSpan.textContent = year;
    // This is placeholder: later you can fetch/display map tiles, predictions, and XAI widgets
  };

  updateYearDisplay(timeSlider.value);

  timeSlider.addEventListener("input", () => {
    const year = timeSlider.value;
    updateYearDisplay(year);
  });
});
