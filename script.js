// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

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