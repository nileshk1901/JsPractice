var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var interval;
var count = 0;
start.addEventListener("click", function () {
    
    interval=setInterval(function () {
        h3.textContent = count;
        count++;
    }, 1000)
});
stop.addEventListener("click", function () {
    clearInterval(interval)
})