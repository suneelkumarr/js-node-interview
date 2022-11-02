//http://www.javascriptkit.com/javatutors/requestanimationframe.shtml

//https://codepen.io/gohilumesh/pen/xjJyWq

var elem = document.getElementById("animatedElem"),
    left = 0,
    lastFrame = +new Date,
    timer;
// Move the element on the right at ~600px/s
timer = setInterval(function () {
    var now = +new Date,
        deltaT = now - lastFrame;
    elem.style.left = (left += 10 * deltaT / 16) + "px";
    lastFrame = now;
    // clear the timer at 400px to stop the animation
    if (left > 400) {
        clearInterval(timer);
    }
}, 16);