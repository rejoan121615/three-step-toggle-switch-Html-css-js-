"use strict";

// for hightlight
const body = document.querySelector("body");

const toggleSwitch = document.querySelector(".switch");
const circle = document.querySelector(".switch > div");

toggleSwitch.onclick = function (e) {
    const clickedSpot = (e.offsetX * 100) / toggleSwitch.clientWidth;

    if (clickedSpot <= 33) {
        toggleSwitch.setAttribute("class", "switch start");
    } else if (clickedSpot >= 66) {
        toggleSwitch.setAttribute("class", "switch end");
    } else {
        toggleSwitch.setAttribute("class", "switch center");
    }
};
