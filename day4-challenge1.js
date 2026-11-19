const cookiePrice = 2;
const cookiesSold = 24;
const browniePrice = 3;
const browniesSold = 15;
const supplyCost = 30;

const cookieSales = cookiePrice * cookiesSold; 
const brownieSales = browniePrice * browniesSold;
const total = brownieSales + cookieSales;
const profit = total - supplyCost;

console.log(`=== Bake Sale ===`)
console.log(`Cookies: $${cookieSales}`)
console.log(`Brownies: $${brownieSales}`)
console.log(`Total sales: $${total}`)
console.log(`Profit: $${profit}`)
