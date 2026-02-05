const display = document.getElementById("countdown-display");

const parseTime = (value) => {
  const [hours, minutes, seconds] = value.split(":").map(Number);
  if ([hours, minutes, seconds].some((part) => Number.isNaN(part))) {
    return 0;
  }
  return hours * 3600 + minutes * 60 + seconds;
};

const formatTime = (totalSeconds) => {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

if (display) {
  const initialValue = display.dataset.initial || "01:23:45";
  let remainingSeconds = parseTime(initialValue);

  const updateDisplay = () => {
    display.textContent = formatTime(remainingSeconds);
  };

  updateDisplay();

  const intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      return;
    }

    remainingSeconds -= 1;
    updateDisplay();
  }, 1000);
}
