// const engNum = +window.prompt("영어 점수 입력");
// if (engNum > 90) {
//   window.console.log("A");
// } else if (engNum > 80) {
//   window.console.log("B");
// } else if (engNum > 70) {
//   window.console.log("c");
// } else if (engNum > 60) {
//   window.console.log("D");
// } else {
//   window.console.log("F");
// }

const num = +window.prompt("정수 입력");
if (num > 0 && num % 2 == 0) {
  window.console.log("양의 짝수");
} else if (num > 0 && num % 2 == 1) {
  window.console.log("양의 홀수");
} else if (num < 0 && num % 2 == 0) {
  window.console.log("음의 짝수");
} else if (num < 0 && num % 2 == -1) {
  window.console.log("음의 홀수");
} else {
  window.console.log("0");
}
