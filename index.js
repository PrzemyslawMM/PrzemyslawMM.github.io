const buttons = document.querySelectorAll(".scroll");
const color = document.querySelector("#kolor-p");
let light = true;

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    document
      .getElementById(el.id.substring(0, el.id.length - 1))
      .scrollIntoView({ behavior: "smooth" });
  });
});

color.addEventListener("click", () => {
  if (light) {
    document.body.style.backgroundColor = " rgb(33, 41, 52)";
    document.querySelector("main").style.color = "#fff";
    document.querySelector("nav").style.backgroundColor = "rgb(23, 30, 39)";
    document.querySelector("footer").style.backgroundColor = "rgb(23, 30, 39)";
    light = false;
  } else {
    document.body.style.backgroundColor = "#fff";
    document.querySelector("main").style.color = "#000";
    document.querySelector("nav").style.backgroundColor = "#333";
    document.querySelector("footer").style.backgroundColor = "#333";
    light = true;
  }
});
