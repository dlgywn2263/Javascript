const lenght = window.prompt("한 변의 길이 입력")
const result = Number(lenght) * Number(lenght)
window.alert(`한 변의 길이 ${lenght}인 정사각형의 넓이: ${result}`)

const under_lenght = window.prompt("밑 변 ?")
const height = window.prompt("높이?")
const result1 = (Number(under_lenght) * Number(height)) * 0.5
window.alert(`밑변 ${under_lenght}과 높이 ${height}인 삼각형의 넓이:${result1}`)

const won = window.prompt("원화 입력")
const result3 = Number(won) * 9.33
window.console.log(`${won}은 %{result3}`)




const user_height = window.prompt("당신의 신장은?")
const user_weight = window.prompt("당신의 몸무게는")
const result2 = Number(weight) / (Number(height) * Number(height))
window.alert(`결과) 키: ${height} 몸무게: ${weight} BMI: ${result2}`)

const min = window.prompt("몇분?")
const sec = window.prompt(min) * 60
window.console.log(`분:${} 초:${}`)