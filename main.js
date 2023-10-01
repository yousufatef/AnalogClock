const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  mode = document.querySelector(".mode-switch");

mode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    const isDarkMode = body.classList.contains("dark")
})

const updateTime = () => {
  let date = new Date(),
  secToDeg = (date.getSeconds() / 60) * 360,
  minToDeg = (date.getMinutes() / 60) * 360,
  houToDeg = (date.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${houToDeg}deg)`;
};
setInterval(updateTime, 1000);
updateTime();