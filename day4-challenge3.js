const playerName = "Ava"
const level = 7;
const wins = 18;
const losses = 6;

console.log(`=== Player Card ===`)
console.log(`Player: ${playerName}`)
console.log(`level: ${level}`)
console.log(`record: ${wins} wins, ${losses} losses`)
console.log(`Games Played: ${wins + losses}`)
console.log(`Win rate: ${wins/(wins+losses)*100}%`)
console.log(`Next level: ${level + 1}`)