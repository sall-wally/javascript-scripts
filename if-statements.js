// const score = 85;
// if (score >= 70) {
//     console.log("you passed")
    
// }
// if (score === 100){
//     console.log("Perfect score!")
// }
// console.log ("Done grading.")

// function checkSpeed(speed) {
//     if (speed > 65) {
//         console.log (`${speed} mph: slow down!`)
//     }
//     console.log(`checked ${speed} mph.`)
// }
// checkSpeed(80)
// checkSpeed(65)

const playerName = "Ava";
let coins = 40;
const swordPrice = 30;
const shieldPrice = 25;
const secretCode = "SAVE10";
const typedCode = "save10";

if (coins >= swordPrice) {
    coins -= swordPrice;
    console.log(`Bough a sword! Coins left: ${coins}`)
}

if (coins >= shieldPrice) {
    coins -= shieldPrice;
    console.log(`Bough a shield! Coins left: ${coins}`)
}
if (coins < shieldPrice){
    let extra = shieldPrice - coins;
    console.log(`Not enough for a shield. Need ${extra} more coins`)
}
if (typedCode === secretCode){
    console.log(` code worked! +10 coins`)
    coins += 10;
}
console.log(`Done shopping. Coins: ${coins}`)