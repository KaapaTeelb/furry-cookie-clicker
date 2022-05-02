trueEnding = false;
showEndings = false;

let ed1 = localStorage.getItem("endingOne");
let ed2 = localStorage.getItem("endingTwo");
let ed3 = localStorage.getItem("endingThree");
let ed4 = localStorage.getItem("endingFour");
let ed5 = localStorage.getItem("endingFive");
let ed6 = localStorage.getItem("endingSix");
let ed7 = localStorage.getItem("endingSeven");
let ed8 = localStorage.getItem("endingEight");

if (ed1 == "1") {
    document.getElementById("win1").innerHTML = ('🍪');
}

if (ed2 == "1") {
    document.getElementById("win2").innerHTML = ('🍪');
}

if (ed3 == "1") {
    document.getElementById("win3").innerHTML = ('🍪');
}

if (ed4 == "1") {
    document.getElementById("win4").innerHTML = ('🍪');
}

if (ed5 == "1") {
    document.getElementById("win5").innerHTML = ('🍪');
}

if (ed6 == "1") {
    document.getElementById("win6").innerHTML = ('🍪');
}

if (ed7 == "1") {
    document.getElementById("win7").innerHTML = ('🍪');
}


var NaNs = new Audio("items/NaN.mp3")
var newGameED = new Audio("items/endingJapanese5.mp3")
var clickerGodSFX = new Audio("items/yakuzaOnTheEdge.mp3")
var badEDSFX = new Audio("items/endingFireHorn.mp3")






if (ed1 == "1" || ed2 == "1" || ed3 == "1" || ed4 == "1" || ed5 == "1" || ed6 == "1" || ed7 == "1") {
    showEndings = true;
}

if (ed1 == "1" && ed2 == "1" && ed3 == "1" && ed4 == "1" && ed5 == "1" && ed6 == "1" && ed7 == "1" && ed8 != "1"){
    trueEnding = true;
    document.getElementById("win1").innerHTML = ('✅');
    document.getElementById("win2").innerHTML = ('✅');
    document.getElementById("win3").innerHTML = ('✅');
    document.getElementById("win4").innerHTML = ('✅');
    document.getElementById("win5").innerHTML = ('✅');
    document.getElementById("win6").innerHTML = ('✅');
    document.getElementById("win7").innerHTML = ('✅');
    $('#win8').delay(15000).show(1000);
}
else if (ed1 == "1" && ed2 == "1" && ed3 == "1" && ed4 == "1" && ed5 == "1" && ed6 == "1" && ed7 == "1" && ed8 == "1"){
    trueEnding = true;
    document.getElementById("win1").innerHTML = ('🌟');
    document.getElementById("win2").innerHTML = ('🌟');
    document.getElementById("win3").innerHTML = ('🌟');
    document.getElementById("win4").innerHTML = ('🌟');
    document.getElementById("win5").innerHTML = ('🌟');
    document.getElementById("win6").innerHTML = ('🌟');
    document.getElementById("win7").innerHTML = ('🌟');
    document.getElementById("win8").innerHTML = ('🌟');
    $('#win8').delay(2500).show(1000);
}

won = 0;
setInterval(() => {
timesDone = performance.now()


if (times == Infinity && won == 0 || times == NaN && won == 0) {
    won = 1;
    goodGame('NaN', 'v q r l w d o x w d u j q r f w v l a h j q l k w d k f x v g o x r z b k z', 'items/NaN.png', 'items/NaN.mp3')
}

if (times >= 1000000 && won == 0 && doomFacStacks <= 10 && doomFacsTier == 2) {
    won = 1;
    goodGame('True Ending...', 'You went through a lot and finally achieved it. Doom Factory is no more, you saved the humanity. Congratulations, True Cookie God. We will meet again, one day... 01110100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01100101 01110110 01100101 01110010 01111001 01110100 01101000 01101001 01101110 01100111', 'items/trueEnding.png', 'items/endingJapanese5.mp3')
    localStorage.setItem("endingEight", "1");
}

    // performance.now() 57600000
if (times >= 1000000 && won == 0 && onlyClicks == true && clickPower == 1 && timesDone >= 57600000) {
    won = 1;
    goodGame('Mirzas Tribute...', 'For ones, who insanity directs all paths...', 'items/clickerGod2.png', 'items/yakuzaOnTheEdge.mp3')
}

if (times >= 1000000 && won == 0 && onlyClicks == true && clickPower == 1) {
    won = 1;
    goodGame('WHAT... HAVE... YOU... DONE????', '1 Million Clicks... give me a screenshot atleast Ill put you on hall of fame', 'items/clickerGod1.png', 'items/yakuzaOnTheEdge.mp3')
}

if (times >= 1000000 && won == 0 && onlyClicks == true) {
    won = 1;
    goodGame('VERY strong fingers!!', 'You seriously done it? You serious? On god? Omg', 'items/jerkyFingers.png', 'items/yakuzaOnTheEdge.mp3')
    localStorage.setItem("endingSix", "1");
}

if (times >= 1000000 && won == 0 && doomFacPeopleFed >= 50 && doomFacsTier == 2) {
    won = 1;
    goodGame('True Bad Ending', 'Was it worth it?.', 'items/trueBadEnding.png', 'items/endingFireHorn.mp3')
    localStorage.setItem("endingSeven", "1"); 
}

if (times >= 1000000 && won == 0 && slavesAmount >= 30 && workerTier >= 2 && doomFacPeopleFed == 0) {
    won = 1;
    goodGame('Good Worker Contract', 'You made a prosperous company! All the people you hired will be happy to work on you forever!', 'items/goodEnding.png', 'items/cheers.mp3')
    localStorage.setItem("endingThree", "1");
    
}

if (times >= 1000000 && won == 0 && doomFacPeopleFed >= 30) {
    won = 1;
    goodGame('Jeffrey Bezos', 'You got to the top... 1 Million Cookies... You also commited a lot of crimes, and the authorities know it, but they cant do anything about it.', 'items/jeffBezos.png', 'items/lowHum.mp3')
    localStorage.setItem("endingFour", "1");
    
}


if (times >= 1000000 && won == 0) {
    won = 1;
    goodGame('1 Million Cookies', 'You did it... It took some time, and some cookie eaters... but... you are here! Congratulations!', 'items/1mil.png', 'items/cheers.mp3')
    localStorage.setItem("endingOne", "1");
    
}

if (times <= -100000 && won == 0 && doomFacsTier == 2){
    won = 1;
    goodGame('The True Doomsday', 'You went too far. Way too far.', 'items/theDoomGod.png', 'items/endingLullaby.mp3')
    localStorage.setItem("endingFive", "1");
}

if (times <= -100000 && won == 0){
    won = 1;
    goodGame('The Doomsday', 'Doom Factory got out of hand, and, you couldnt manage to handle it...', 'items/doomFac.png', 'items/humTrumpet.mp3')
    localStorage.setItem("endingTwo", "1");
}



}, 1000);