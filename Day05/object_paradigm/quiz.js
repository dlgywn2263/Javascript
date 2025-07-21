const baskin= {
icecreams: [
    {name: "초코", price: 1000}, 
    {name: "딸기", price: 2000},
    {name: "바나나", price: 3000},
   ],
sales : 0 ,
sellIcecream: function(x){
    this.sales = this.sales + this.icecreams[x].price;
 },
};
baskin.sellIcecream(1);
baskin.sellIcecream(2);
baskin.sellIcecream(0);

window.console.log(baskin.sales)
