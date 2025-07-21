const number = window.prompt("비밀번호 입력")
  const isLength  =  4 <= number.length && number.length >= 12 ? "허용" : "비밀번호 길이가 맞지 않습니다."
 const hasChar = number.includes("@","!","#") ? "허용" : "비밀번호에 @,!,#이 없습니다."
 const isStarswitIt = number.startsWith("it") ? "허용" : "비밀번호 시작이 it가 아닙니다."


if(!result){
     window.console.log("비밀번호 길이가 맞지 않습니다.")
}else if(!result1){
 window.console.log("비밀번호에 @,!,#이 없습니다.")
}else if(!result2){
     window.console.log("비밀번호 시작이 it가 아닙니다.")
}else{
    window.console.log("올바르게 만듦")
}