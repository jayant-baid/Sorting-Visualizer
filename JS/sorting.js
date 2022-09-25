let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let SELECTED;
let SORTED;
let UNSORTED;
let TEMPSORTED;
let COMPARE;
// Used only in Merge & Quick
let LEFT;
let RIGHT;

if (dark) {
    SELECTED = "red";
    SORTED = "#55a630";
    UNSORTED = "#cbd5e1";
    TEMPSORTED = "#52b69a";
    COMPARE = "#a47148";
    // Used only in Merge & Quick
    LEFT = "orange";
    RIGHT = "red";
}
else {
    SELECTED = "red";
    SORTED = "green";
    UNSORTED = "#1e293b";
    TEMPSORTED = "#55a630";
    COMPARE = "brown";
    // Used only in Merge & Quick
    LEFT = "orange";
    RIGHT = "red";
}


let arrsize = document.querySelector("#size");
arrsize.addEventListener("input", function () {
    generateBars(parseInt(arrsize.value))
});
generateBars();

let time = 35;
let sortspeed = document.querySelector('#speed');
sortspeed.addEventListener("input", function () {
    time = 105 - parseInt(sortspeed.value);
});

function generateBars(barno = 50) {
    document.getElementById("bar").innerHTML = "";
    let bars = [];
    for (let i = 0; i < barno; i++) {
        bars.push(Math.floor(Math.random() * 300) + 1);
    }

    const divs = document.querySelector("#bar");

    for (let x = 0; x < barno; x++) {
        const temp = document.createElement("div");
        temp.classList.add("sort");
        temp.classList.add("baritem");
        temp.style.height = bars[x] + "px";
        divs.append(temp);
    }
}

document.getElementById("newarr").addEventListener("click", function () {
    generateBars(arrsize.value);
    enableSortingBtn();
    enableSizeSlider();
});

function swap(element1, element2) {
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

function delay(millisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("")
        }, millisec);
    })
}

size.onchange = function () {
    arraysize.innerHTML = size.value;
}
speed.onchange = function () {
    speedvalue.innerHTML = speed.value;
}

function disableSortingBtn() {
    document.querySelector("#selection").disabled = true;
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
}

function enableSortingBtn() {
    document.querySelector("#selection").disabled = false;
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
}

function disableSizeSlider() {
    document.getElementById("size").disabled = true;
}

function enableSizeSlider() {
    document.getElementById("size").disabled = false;
}