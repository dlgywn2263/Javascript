const num = "123456789";
const q1 = [...num].map((x, i) => (i > 5 ? "*" : x)).join("");
console.log(q1);
