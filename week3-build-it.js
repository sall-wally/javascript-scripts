// const playerName = "Riley";
// let tickets = 0;
// const bear = 30;




// function ticketsFor(game){
//     if (game === "skeeball"){
//         return 10;
//     }
//     else if (game === "claw"){
//        return 5;
//     }
//     else if (game === "racing"){
//         return 8;
//     }
//     else{
//         console.error(`wrong things stupid`);
//         return 0;
//     }
// }

// function playGame(game){
//     const total = ticketsFor(game);
//     if ( total === 0){
//         console.log(`skipped: ${game}`)
//     } else {
//         tickets += total;
//         console.log(`Played ${game}: + ${total}. Tickets: ${tickets}`)
//     }

// }

// function prizeFor(total){
//     if (total >= 30){
//         console.log(`prize: Giant bear`)
//     }
//      else if (total >= 15){
//         console.log(`prize so far: yo-yo`)
//     }
//     else{
//         console.log(`Prize: sticker`)
//     }
// }

// console.log(`=== prize counter: ${playerName} ===`)
// playGame("skeeball")
// playGame("claw")
// prizeFor(tickets)
// console.log(`Skipped pinball`)
// playGame("racing")
// playGame("skeeball")
// prizeFor(tickets)
// console.log(`Bear unlocked: ${tickets >= bear}`)

// pair challeng B: Fix it (Game pass). This ile has 6 bugs. Find them all.

// const gamerTag = "PixelPanda"
// let credits = 8;

// function tagIsValid(tag){
//     if (tag.length < 3) {
//         console.error (`Too short: ${tag}`)
//         return false;
//     } else if (tag.length > 12){
//         console.error (`Too long: ${tag}`)
//         return false;
//     } else{
//         return true;
//     }
// }
// function passLevel(amount){
//     if ( amount >= 20){
//         return "VIP";
//     } else if (amount >= 10) {
//         return "Player";
//     } else {
//         return "guest";
//     }
// }

// function buyCredits(amount){
//     credits += amount;
//     console.log(`Bought ${amount} credits. Total: ${credits}`);
// }
// console.log("=== Game Pass ===")
// console.log(`${gamerTag} Valid: ${tagIsValid(gamerTag)}`)
// console.log(`Al valid: ${tagIsValid("Al")}`)
// console.log(`Level: ${passLevel(credits)}`);
// buyCredits(5);
// console.log(`Level: ${passLevel(credits)}`);
// buyCredits(10);
// console.log(`Level: ${passLevel(credits)}`);
// console.log(`VIP lounge: ${passLevel(credits) === "VIP"}`);

const highScore = 900;
let scoresCounted = 0;

function rankFor(score) {
    if (score >= 2000) {
        return "Champion";
    } else if (score >= 1000) {
    return "Legend";
    } else if(score >= 500){
        return "pro";
    } else if( score >= 0){
        return "Rookie";
    } else {
        console.error(`Bad score: ${score}`);
        return "none";
    }
}

function postScore(name, score){
    const rank = rankFor(score);
    if (rank === "none") {
        console.log(`Skipped: ${name}`);
    } else {
        scoresCounted += 1;
        console.log(`${name}: ${score} (${rank}). New record: ${score > highScore}`)
    }
}
console.log("=== High score board ===")
postScore("Ava", 650)
postScore("Ben", 1200)
postScore("cy", -5)
postScore("Dee", 900);
postScore("Eli", 2500);
postScore("Fin", 1999);
console.log(`scores counted: ${scoresCounted}`);
console.log(`Board full: ${scoresCounted >= 5}`)
