const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");

minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
  if (+num.innerHTML == 0) {
    num.innerHTML == 0;
  } else {
    num.innerHTML = +num.innerHTML - 1;
  }
  num.style.color = +num.innerHTML < 11 ? "black" : " blue";
});

plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
  num.innerHTML = +num.innerHTML < 9 ? "black" : " blue";
});
