//quiz 
// arr 배열을 줬을 떄 배열 안에 있는 요소들을 두 배로 해서 돌려주는 함수 만들기
// [1,2,3,4,5] -> [2468]
// map: 리스트 안에 있는 요소 바꾸기
const twoTime = (x) =>{
    return x * 2;
};
const test = [1,2,3,4,5].map(twoTime);
console.log(test)
