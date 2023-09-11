const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const currentDayElement = document.getElementById("currentDay");
currentDayElement.innerHTML = `${currentDay}`;

const latestTime = new Date();
const timeResult = latestTime.getTime();
const timeElement = document.getElementById("time");
timeElement.innerHTML = timeResult.toString();

