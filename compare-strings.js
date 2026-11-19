const savedUsername = "ava_codes";
const typedUsername = "Ava_codes";
const savedPin = "4821";
const typedPin = "4821";
const newPassword = "sunshine2";
const minLength = 8;
const usernameMatches = savedUsername === typedUsername;
const pinMatches = savedPin === typedPin;
const isLongEnough = minLength <= newPassword.length;
const isNotPassword = "password" !== newPassword

console.log(`=== Login Checker ===`)
console.log(`Username matches: ${usernameMatches}`)
console.log(`PIN matches: ${pinMatches}`)
console.log(`Password length: ${newPassword.length}`)
console.log(`Long enough: ${isLongEnough}`)
console.log(`Not "password": ${isNotPassword}`)


