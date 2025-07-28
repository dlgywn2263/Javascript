// Document[HTMl] queryselect(찾기). createElement(만들기)
//Element[Tag] innerHTML(글씨넣기) style(css) appendChild (자식 태그로 넣기)

//div
 const div = document.createElement("div");
 div.innerHTML = "지금 두번째 시간";
div.style.color = "pink"
div.style.backgroundColor = "green";
div.style.fontSize = "30px"
 document.body.appendChild(div);

 //button
 const button = document.createElement("button");
 button.innerHTML =" 집 가고 픔";
 button.style.color = "blue"
 button.style.backgroundColor = "yellow"
 button.style.fontSize = "20px"
 button.style.padding = "10px"
 document.body.appendChild(button);