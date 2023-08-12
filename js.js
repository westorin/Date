const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function moveRandom() {
  //let img = document.createElement("img");
  //img.setAttribute("id", "img");
  //img.src = "nope.jpg";
  //document.body.appendChild(img);

  //document.getElementById("img").style.position = "absolute";
  //document.getElementById("img").style.top = ver;
  //document.getElementById("img").style.left = hor;

  document.getElementById("no").style.position = "absolute";
  const button = document.getElementById("no");
  const hor = (button.style.left = getRandom(0, 100) + "%");
  const ver = (button.style.top = getRandom(0, 100) + "%");
}

function yesButton() {
  document.getElementById("text").innerHTML = "Call me 😉 775-9629";
}
