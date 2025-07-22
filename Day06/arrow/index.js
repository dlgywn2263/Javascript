//일반 함수 [구문법]
function plus100 (x){
    return x + 100;
 }
//화살표 함수 [신문법]
 const plus100 = (x) => {
    return x + 100;
 };



const quiz1 = (x) => {
    return x * 2;
};

const quiz2 = (x) => {
    return x - 500;
};

const quiz3 = (x,y) => {
    return x > y ? x:y;
};
const quiz4 = (str) =>  {
    return str.length;
};

const quiz5 = (str) => {
   return str.length > 10 ? "길이가 기렁요" : " 길이가 적당해유";
//    if(str.length > 10) {
//     return "길이가 기렁요"
//    }else {
//     return " 길이가 적당해유"
//    }
};

const quiz6 = (str) => {
    return `${str}하다니 럭키비키잔앙~`;
};
const quiz7 = (x,y) => {
    return x **y;
};
const quiz8 = (x,y) => {
return x - y;
}
const quiz9 = (str) => {
    return str.includes("a") || str.includes("b") ?  "a,b 포함" : "a,b 미포함";
};
const quiz10 = (x) => {
    return [x*1, x*2, x*3, x*4, x*5]

};
const quiz11 = (str, x) =>{
    return str.slice(0, x+1
        
    );
}