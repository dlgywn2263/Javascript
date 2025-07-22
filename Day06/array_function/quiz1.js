const user = window.prompt("영어 문장 입력");
 

const arr = user.split(" ")
const fn1 = (x) =>{

    return x.length;
};
const quiz1 = arr.map(fn1);
window.console.log(quiz1)
