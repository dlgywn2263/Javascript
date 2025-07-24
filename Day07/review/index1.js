const starbucks = [
  {
    name: "아메리카노",
    price: 4500,
    shots: 2,
    ingredients: ["water", "caffeine"],
  },
  {
    name: "라떼",
    price: 5500,
    shots: 2,
    ingredients: ["water", "caffeine", "milk"],
  },
  {
    name: "돌체라떼",
    price: 6500,
    shots: 3,
    ingredients: ["water", "caffeine", "milk"],
  },
  {
    name: "바닐라크림",
    price: 5500,
    shots: 2,
    ingredients: ["water", "caffeine"],
  },
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["water", "caffeine", "chocolate", "milk"],
  },
];

const q1 = (x) => {
  x.price = x.price * 0.8;
  return x;
};
const result1 = starbucks.map(q1);
console.log(result1);

const q2 = (x) => {
  //   if (x.name.includes("라떼")) {
  //     return "재고 없음";
  //   } else {
  //     x;
  //   }
  x.name = x.name.includes("라떼") ? "재고 없음" : x.name;
  return x;
};
const result2 = starbucks.map(q2);
console.log(result2);

const fn6 = (y) => {
  return y == "caffeine" ? "decaffeine" : y;
};
const q3 = (x) => {
  x.ingredients = x.ingredients.map(fn6);
  return x;
};
const result3 = starbucks.map(q3);
console.log(result3);
