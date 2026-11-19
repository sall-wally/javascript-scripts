// console.log(5 + 3 > 7);
// console.log(2 * 6 === 12);
// console.log(10 - 4 < 2 * 3);
// console.log(10 - 4 <= 2 * 3);

// console.log( 5 = 5)

// const score = 85;
// const passing = 70;

// console.log(score - 20 < passing);

// console.log( `Adult: ${age>=}`)

const riderName = "Ava";
const riderHeight = 52;
const minHeight = 48;
const riderAge = 13;
const minAge = 14;
const rideCost = 5;
let tickets = 6;
let isTallEnough = riderHeight >= minHeight;
let needsAdult = riderAge >= minAge;
let hasTickets = tickets >= rideCost

console.log(`=== Ride Check: Ava ===`)
console.log(`Tall enough: ${isTallEnough}`)
console.log(`Needs an adult: ${needsAdult}`)
console.log(`Has enough tickets: ${hasTickets}`)
 tickets -= rideCost;
console.log(`Rode the coaster! Tickets left: ${tickets}`)
hasTickets = tickets >= rideCost
console.log(`Has enough tickets: ${hasTickets}`)



