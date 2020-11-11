
// For Reaver Christmas Special
var countdownChristmas = new Date("Dec 25, 2020 23:59:59").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countdownChristmas - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);

  document.getElementById("reaver-countdown").innerHTML = days + "d " + hours + "h " +
  minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("reaver-countdown").innerHTML = "EXPIRED";
  }
}, 1000);


// For all other offers, New Year's Special
var countdownNewYear = new Date("Dec 31, 2020 23:59:59").getTime();

var y = setInterval(function () {

  var now = new Date().getTime();

  var distance = countdownNewYear - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);

  document.getElementById("newyear-countdown").innerHTML = days + "d " + hours + "h " +
  minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(y);
    document.getElementById("newyear-countdown").innerHTML = "EXPIRED";
  }
}, 1000);
