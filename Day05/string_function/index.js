const coffee = "ice americano";
//타입. 함수(a.b):boolean

coffee.length //역할: 글자 갯수 돌려줌
coffee.includes("ice") // 역할: 글자 포함 여부, 결과값: boolean
coffee.repeat(3)        //역할: 글다 n번 반복, 결과값: string
coffee.slice(0,5)       // 역할: 글자 0번 부터 4번까지 돌려줌, 결과값: string
coffee.replace("i","k") //역할: 글자i를 k로 바꿔서 돌려줌, 결과값:string
coffee.replaceAll("i","k") //역할: 글자 i를 모두 k로 바꿔서, 결과깂:string
coffee.startsWith("e") // 역할: 글자 e로 시작하는지 물음, 결과값: boolean
coffee.toUpperCase() //역할 : 대믄자화 , 결과값:sting
coffee.toLowerCase()// 역할: 소문자화, 결과값:string
coffee.split("a") //역할: a를 기준으로 짤라서 라스트를 돌려줌, 결과값:array