const quiz1 =(x) =>{
    return x * 2 + 10;
};
const test1 = [3, 6, 9, 12, 15].map(quiz1);
console.log(test1);

const quiz2 =(x) =>{
if(x % 2){
    return x * 2;
}else{
    return x * 3;
}
};
const test2 =[1,2,3,4,5,6,7,8,9,10].map(quiz2)
console.log(test2);

const quiz3 = (x) =>{
    if(x < 5){
        return 1;
    }else{
        return 2;
    }
};
 const test3 = [1,2,3,4,5,6,7,8,9,10].map(quiz3)
 console.log(test3)
 
 const quiz4 =(x) => {
    if(x % 3 == 0 ){
        return "❤"; 
    }else{
        return"😢";
    }
 };
 const test4 =  [1,2,3,4,5,6,7,8,9,10].map(quiz4)
 console.log(test4)

 const quiz5 = (x) =>{
    return x.length
 }
 const test5 = ["apple","mango","juice","kiwi","strawberry"].map(quiz5)
 console.log(test5)