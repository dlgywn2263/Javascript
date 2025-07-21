//object 타입
//key-value
//key는 중복 안됨 - 문자, 숫자
//value 중복 됨 - 아무타입가능
// const americano = {
// name:"아메리카노",
// price: 2000,
// isIce: true,
// hashot:true

// };
// window.console.log(americano.name);
// window.console.log(americano.price);
// window.console.log(americano.isIce);

// window.console.log(americano["name"]);
// window.console.log(americano.price);
// window.console.log(americano.isIce);

// const boardgame = {
//     name: "할리갈리",
//     player: 4,
//     time: "10분"
// };
// window.console.log(boardgame.name);
// window.console.log(boardgame.player);
// window.console.log(boardgame.time);

// const member = {
//     name: "이효주",
//     age: 22,
//     eyes:{
//          left: 0.3,
//          right: 0.2
//     },
// };
// window.console.log(member.eyes.left);
// window.console.log(member["eyes"]["right"]);

// //없는 key을 요청하면 undefined
// window.console.log(member.living);
// member.living = "인천";
// window.console.log(member.living);
// member.living = "파주";

// delete member.name;
// window.console.log()





//1.보드게임 오브젝트 타입 변수 만들기
// 이름은 할리갈리. 플레이어 수 4, 소요시간 10분

const boardgame = {
    name: "할리갈리",
    player: 4,
    time:"10분"
};
window.console.log(boardgame.name)
window.console.log(boardgame.player)
window.console.log(boardgame.time)

// 2. 회원 오브젝트 타입 변수 만들기
//  회원 이름 여러분 이름, 나이, 눈시력 왼쪽 , 오른쪽

const member ={
    name:"이효주",
    age : 22,
    eyes :{
        left : 0.3,
        right: 0.2
    }

};
window.console.log(member.name)
window.console.log(member.age)
window.console.log(member.eyes.left)
window.console.log(member.eyes.right)
