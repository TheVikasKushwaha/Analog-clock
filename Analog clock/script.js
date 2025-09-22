const numberHours = document.querySelector(".number-hour");
const numberElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

const hourHand = document.querySelector(".hours i");
const minuteHand = document.querySelector(".minutes i");
const secondHand = document.querySelector(".seconds i");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
