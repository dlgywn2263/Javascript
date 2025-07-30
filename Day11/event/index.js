const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("히히");
});

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeend", "<div>아메리카노</div>");
});
