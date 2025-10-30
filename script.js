function updateTimer() {
  // Get the current system date and time
  const now = new Date();

  // Format date and time into readable string
  const dateTimeString = now.toLocaleString(); // e.g., 10/31/2025, 3:05:45 AM

  // Display in the <p> element
  document.getElementById("timer").textContent = dateTimeString;
}

// Call immediately once to show the time instantly
updateTimer();

// Then update every second (1000 ms)
setInterval(updateTimer, 1000);
