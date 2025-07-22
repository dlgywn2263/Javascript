const number = window.prompt("비밀 번호 입력")
const isLength = 4 <= number.length && number.length >= 12 ? "허용" : "비밀번호 길이가 맞지 않습니다"
const hasChar = number.includes("@","!","#") ? "허용" : "비밀 번호에 @,!,# 이 없습니다"
const isStarswithIt = number.startsWith("it") ? "허용" : "비밀 번호 시작이 it가 아닙니다"

if(!isLength){
    window.console.log("비밀번호 길이가 맞지 않습니다")
}else if (!hasChar){
    window.console.log("비밀번호에 @,!,#이 없습니다")
}else if(!isStarswithIt){
    window.console.log("비밀 번호 시작이 it가 아닙니다")
}else{
    window.console.log("올바르게 만듦")
}
