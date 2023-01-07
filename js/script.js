const toggleSwitch = document.querySelector(".switch");
const circle = document.querySelector(".switch > div");

// get link and script 
const cusCss = document.querySelector(".ctr_links #custom-css");
const cusJs = document.querySelector(".ctr_links #custom-js");


// activate dark mode as default
const body = document.querySelector("body");
body.classList.add("dark");

toggleSwitch.onclick = function (e) {
    const clickedSpot = (e.offsetX * 100) / toggleSwitch.clientWidth;

    if (clickedSpot <= 33) {
        toggleSwitch.setAttribute("class", "switch dark-mode");
        // remove class
        body.classList.contains("light")
            ? body.classList.remove("light")
            : null;
        body.classList.contains("dark-light")
            ? body.classList.remove("dark-light")
            : null;
        body.classList.add("dark");
        // custom style 
        cusCss.href = "/pve2/css/visys_dark.css";
        cusJs.src = "/pve2/css/visys_dark.js";
    } else if (clickedSpot >= 66) {
        toggleSwitch.setAttribute("class", "switch dark-light-mode");
        // remove mode mode
        body.classList.contains("light")
            ? body.classList.remove("light")
            : null;
        body.classList.contains("dark") ? body.classList.remove("dark") : null;
        body.classList.add("dark-light");
        // custom style
        cusCss.href = "/pve2/css/visys_mix.css";
        cusJs.src = "/pve2/css/visys_mix.js";
    } else {
        toggleSwitch.setAttribute("class", "switch light-mode");
        body.classList.add("light");
        // remove other mode
        body.classList.contains("dark-light")
            ? body.classList.remove("dark-light")
            : null;
        body.classList.contains("dark") ? body.classList.remove("dark") : null;
        // custom style
        cusCss.href = "/pve2/css/visys_light.css";
        cusJs.src = "/pve2/css/visys_light.js";
    }
};
