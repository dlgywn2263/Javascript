const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const price = document.querySelector(".price");
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});

minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
  price.innerHTML = +price.innerHTML % 2;
});
