const car ={
    name : "페라리",
    price : 100000000,
    color: "빨간색",
    changeColor:function (x){
        this.color = x;
    },
    priceUp: function(x){
        this.price = x + x ;
    },
    changeName: function(x){
        this.name = x;
    }
};
car.changeColor("검은색")

car.priceUp(2000000000)

car.changeName("람보르기니")
window.console.log(car)