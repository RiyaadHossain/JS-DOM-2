// Header Title
const h1 = document.getElementById("header");
h1.addEventListener("click", function () {
  h1.style.textAlign = "center";
  h1.style.backgroundColor = "#35BDD0";
  h1.style.padding = "10px";
  h1.style.borderRadius = "5px";
});

const getBK = document.getElementById("getBack");
getBK.addEventListener("click", getBac);

function getBac() {
  h1.style.textAlign = "inherit";
  h1.style.backgroundColor = "inherit";
  h1.style.padding = "inherit";
  h1.style.borderRadius = "inherit";
}

// Second Way
function blue() {
  document.body.style.backgroundColor = "#1B98F5";
  document.getElementById("secBtn").style.color = 'white';
  document.getElementById("secBtn").style.backgroundColor = 'black';
}

// Third Way
const redBtn = document.getElementById("redButton");
redBtn.onclick = bgRed;
function bgRed() {
  document.body.style.backgroundColor = "#B4161B";
  document.getElementById("redButton").style.color = "white";
  document.getElementById("redButton").style.backgroundColor = "black";
}

// Forth Way
const bgYellowGreen = document.getElementById("yellowGreen");

bgYellowGreen.addEventListener("click", bgYellowGr);
function bgYellowGr() {
  document.body.style.backgroundColor = "#D9D55B";
  document.getElementById("yellowGreen").style.color = "white";
  document.getElementById("yellowGreen").style.backgroundColor = "black";
}

// Sixth Way
document.getElementById("green2").addEventListener("click", function(){
  document.body.style.backgroundColor = "#4DD637";
  document.getElementById("green2").style.color = "white";
  document.getElementById("green2").style.backgroundColor = "black";
})


// Seventh Way
