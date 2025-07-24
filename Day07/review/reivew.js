const r1 = (x) => {
  return x ** 2;
};
const result1 = [1, 2, 3, 4].map(r1);

const r2 = (x) => {
  return x.toUpperCase();
};
const result2 = ["hong", "kim", "lee"].map(r2);

const r3 = (x) => {
  if (x < 60) {
    return "불합격";
  } else {
    return "합격";
  }
};
const result3 = [85, 42, 77].map(r3);

const r4 = (x) => {
  return x * 0.8;
};
const result4 = [10000, 20000, 15000].map(r4);

const r5 = (x) => {
  return x.name;
};

const result5 = [
  { name: "홍길동", age: 16 },
  { name: "김철수", age: 17 },
];
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
