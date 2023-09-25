function showDateAndTime() {
  document.getElementById("displaydate").innerHTML = Date();
}
showDateAndTime();

//setTimout(showDate, 5000);

setInterval(showDateAndTime, 1000);
function showClock() {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var minute = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  document.getElementById("display_clock").innerHTML =
    hour + ":" + minute + ":" + second;
}
showClock();
setinterval(showClock, 1000);
