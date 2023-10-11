const list = document.querySelector(".important-facts");
const valueDisplays = document.querySelectorAll(".important-fact__numbers");
const interval = 1000;

const counter = () => {
  if (window.scrollY - list.offsetTop > -100) {
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue + "+";
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });

    window.removeEventListener("scroll", counter);
  }
};

window.addEventListener("scroll", counter);

window.addEventListener("load", counter);
