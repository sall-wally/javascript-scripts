const bossStart = 500;
const swordDamage = 40;
const fireDamage = 75;
const poitionHeal = 50;
let bossHealth = bossStart;
let playerHealth = 100;
let bossAttack = 30;

console.log(`=== Boss Battle ===`)
console.log (`Start | Boss: ${bossStart}HP | You: ${playerHealth}HP`)
bossHealth -= swordDamage  + fireDamage;
playerHealth -= bossAttack;
console.log (`Turn 1 | Boss: ${bossHealth}HP | You: ${playerHealth}HP`)
playerHealth += poitionHeal - bossAttack * 2;
console.log (`Turn 2 | Boss: ${bossHealth}HP | You: ${playerHealth}HP`)
bossHealth -= swordDamage * 2  + fireDamage * 3;
console.log (`Turn 3 | Boss: ${bossHealth}HP | You: ${playerHealth}HP`)
console.log(`Total damage dealt: ${bossStart-bossHealth}`)