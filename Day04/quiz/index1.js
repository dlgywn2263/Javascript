// const line_map = [
//     {name:"시내버스", price: 1200},
//     {name:"광역버스", price: 2000},
//     {name:"마을버스", price: 1000}
// ];

// const bus_line = +window.prompt("((버스 노선의 종류(1~3)입력)")-1;
// const age = window.prompt("나이 입력");

// const isInfantyOrElder = age <= 7 || 65 <= age;
// const isYouth = 8 <= age && age <= 19;


// if(isInfantyOrElder ){
//     window.console.log(`${line_map[bus].name}요금: 0원`)
// }else if(isYouth){
//     window.console.log(`${line_map[bus].name}요금:${line_map[bus].price * 0.7} 원`)
// }





const bus = +window.prompt("버스 노선 입력") -1 ;
const age = +window.prompt("승객의 나이 입력");

const line = [
    {name: "시내버스", price: 1200},
    {name: "광역버스", price: 2000},
    {name: "마을버스", price: 1000}
]

isFree = age <= 7 || 65 <= age;
isYouth = age <= 8 && 19 >= age;

if(isFree){
    window.console.log(`${line[bus].name},버스 요금: 없음`)
}else if(isYouth){
    window.console.log(`${line[bus].name},버스요금:${line[bus].price * 0.7}원`)
} else{
     window.console.log(`${line[bus].name},버스요금:${line[bus].price}원`)
}