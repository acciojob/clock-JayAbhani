function updateTimer() {
	let now = new Date().toLocaleString();
	document.getElementById("timer").textContent = now;
}

updateTimer();

setInterval(updateTimer, 1000);