// const subway=[
//     {name:"일반 노선", price:1250},
//     {name:"급행 노선", price:2000},
//      {name:"관광 노선", price:3000}
// ];
// const line = +window.prompt("노선 입력(1~3)") -1;
// const age = +window.prompt("나이 입력");
// const panel = +window.prompt("구간 입력");

// const overcharge = panel <= 10 ? 0 : (panel - 10) * 100 ;
// const isFree = age <= 7 || age >= 65;
// const isYouth = age >= 8 && age <= 18;



// if ( isFree){
// window.console.log(`요금 :0원`);
// }else if(isYouth){
//      window.console.log (`요금: ${(subway[line].price + overchange) * 0.6}원`)
// } else{
//     window.console.log(`요금:${(subway[line].price + overchange) * 1}원`)
//     }

const subway = +window.prompt("지하철 노선 종류")-1;
const age = +window.prompt("나이 입력");
const section = +window.prompt("탑승 구간 입력");

const line = [
     {name: "일반 노선", price:1250},
     {name: "급행 노선", price:2000},
     {name: "관광 노선", price:3000}
];


const isFree = age <= 7 || age >= 65;
const isYouth = age <= 8 && age <= 18;
const overcharge = section <= 10 ?  0 : (section - 10) * 100

if(isFree){
      window.console.log(`요금: 0원`)
   
}else if(isYouth){
       window.console.log(`요금:${line[subway].price + overcharge * 0.6}원`)

}else{
       window.console.log(`요금:${line[subway].price + overcharge * 1}원`)
}