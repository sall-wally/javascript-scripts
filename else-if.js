// const temperture = 95;
// if ( temperture > 90){
//     console.log("Bring water!")
// } else if (temperture < 50){
//     console.log("Grabe a jacket.")
// }
// console.log("Have a good day.")



// const light = "blue";
// if( light === "green"){
//     console.log("Go!");
// } else if (light === "yellow"){
//     console.log("Slow down.");
// } else if ( light === "red"){
//     console.log("Stop.");
// } else {
//     console.error (`Broken light:`);
// }

// const score = 95;
// if (score >= 70) {
//     console.log("C")
// } else if (score >= 80){
//     console.log("B")
// }else if (score >= 90){
//     console.log("A");
// }

// const cartTotal = 30;
// let shipping;
// if (cartTotal >= 50){
//     shipping = 0;
// } else if (cartTotal >= 25){
//     shipping = 5;
// } else {
//     shipping = 10;
// }
// console.log(`Shipping: $${shipping}`)

const customer = "Jordan";
const pizzaSize = "medium";
const toppings = 3;
const topppingPrice = 2;
const tip = 5;
let money = 90;

function priceFor (pizzaSize){
    if (pizzaSize === "small"){
        return 8;
    }
    else if (pizzaSize === "medium"){
        return 12;
    }
    else if ( pizzaSize === "large"){
        return 15;
    }
    else {
        console.error(`unknown pizza size ${pizzaSize}`)
        return 0;
    }
}
pizzaPrice = priceFor(pizzaSize);

console.log (`=== ${customer}'s Pizza order ===`)
console.log(`medium pizza: $${priceFor(pizzaSize)}`);
console.log(`Total with ${toppings} toppings: $${ priceFor(pizzaSize) + topppingPrice * toppings}`)
if (money <= pizzaPrice){
    console.error(`Order not processed. brokey`)
}
else if (money >= pizzaPrice){
    if(money >= (priceFor(pizzaSize) + tip + topppingPrice * toppings)){
        console.log(`Ordered! Plus tip. Money left: $${money - (priceFor(pizzaSize) + tip + topppingPrice * toppings) }`)
    }
    else if (money >= (priceFor(pizzaSize) + tip + topppingPrice * toppings)){
    console.log(`Ordered! No tip this time. Money left: $${money - (priceFor(pizzaSize) + topppingPrice * toppings) }`)
    }
}