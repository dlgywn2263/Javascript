// const user_tag = window.prompt("만들고 싶은 태그 입력");
// const user_bc = window.prompt("배경색 입력");
// const user_w = window.prompt("내용 입력");

// const tag=document.body.createElement(user_tag);
// tag.style.backgroundcolor = user_bc ;
// tag.innerHTML = user_w;
// document.body.appendChild(tag);


const colorList = ["red","orange","yelloe"," green","bule","indigo","purple"]
const foodList = window.prompt("좋아하는 음식들 입력").split(" ")


foodList.forEach((x,i)=>{
const button =  document.createElement("button")
button.innerHTML = x
button.style.color = colorList[i % 7]
document.body.appendChild(button)
}
)

