const degree = +window.prompt("각도 입력");
if (degree > 0 && degree < 90) {
  window.console.log("예각");
} else if (degree == 90) {
  window.console.log("직각");
} else if (degree > 90 && degree < 180) {
  window.console.log("평각");
} else if (degree == 180) {
  window.console.log("둔각");
} else {
  window.console.log("끝");
}

const eng_score = +window.prompt("영어 점수 입력");
const math_scroe = +window.prompt("수학 점수 입력");
const guk_score = +window.prompt("국어 점수 입력");
const average = (eng_score + math_scroe + guk_score) / 3;
const has100 = guk_score == 100 || math_scroe == 100 || eng_score == 100
const has_under = guk_score <= 60 || math_scroe <= 60 || eng_score <= 60

if (average >= 90) {
  window.console.log("A");
} else if (average >= 80 && average < 90) {
  window.console.log("B");
} else (average < 80) {
  window.console.log("C");
} 


if(has100){
    window.console.log("Good")
}
if(has_under){
    window.console.log("Bad")
}

const drink = +window.prompt("음료 종류 수");
const amount = +window.prompt("구매할 음료 수");
const money = +window.prompt("투입한 금액 (원)");
if(drink == 1){
    const americano_price = 3000 * amount 
}
