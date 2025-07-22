function quiz1(alpabet){
    if(alpabet == alpabet.toUppercase()){
        return `${alpabet}는 대문자 입니다`;
    }else {
        return `${alpabet}는 소문자 입니다`;
    }
}

function quiz2(x,y){
    if(x.includes(y)){
        return`${x}는 ${y}가 포함되어 있습니다`
    }else{
        return`${x}는 ${y}가 포함되어 있지 않습니다`
    }
}
function quiz3 (email){
    if(email.inclucdes("@")){
        return `${email}은 올바른 이메일 형식입니다`
    }else{
          return `${email}은 올바르지 않는 이메일 형식입니다`
    }
}