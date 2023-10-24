const lib = require('./data.js');

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

function generateMessage() {
    let asQuLen = lib.astrologyQuotes.length;
    let astrologyQuote = lib.astrologyQuotes[generateRandomNumber(asQuLen)];
    console.log(`Astrology quote: ${astrologyQuote}`);

    let adjLen = lib.adjectives.length;
    let adjectives = lib.adjectives[generateRandomNumber(adjLen)];
    console.log(`You are ${adjectives}.`);

    let wthLen = lib.whatToDo.length;
    let whatToDo = lib.whatToDo[generateRandomNumber(wthLen)];
    console.log(`Yuo should ${whatToDo}.`);
}

generateMessage();