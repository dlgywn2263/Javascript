
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
} else if (average >= 80) {
  window.console.log("B");
} else {
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
    const total_cost = 3000 * amount 
    if (money >= total_cost){
        window.console.log(`아메리카노 ${amount}개 , 잔돈 ${money - total_cost}원`);
    } else{
        window.console.log(`잔액이 부족합니다`);
    }
}
else if(drink == 2){
    const total_cost1 = 4000 * amount 
    if (money >= total_cost1){
        window.console.log(`레몬에이드 ${amount}개 , 잔돈 ${money - total_cost1}원`);
    }else{
        window.console.log(`잔액이 부족합니다`);
    }
}else if(drink == 3){
    const total_cost2 = 3500 * amount
    if(money >= total_cost2){
        window.console.log(`카페라떼 ${amount}개 , 잔돈 ${money - total_cost2}원`)
    }else{
        window.console.log(`잔액이 부족합니다`);
    }
}
else {
    window.console.log("dd")
}