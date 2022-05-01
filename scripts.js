
// btn1
clickPowerBuyPrice = 50;
var btn1 = document.getElementById("button1");
btn1.addEventListener("click", clickPowerBuy);

// Click Power Buy Func
function clickPowerBuy(){
    if (times >= clickPowerBuyPrice) {
        times = times - clickPowerBuyPrice,
        clickPower = clickPower + 1;
        clickPowerBuyPrice = clickPowerBuyPrice * 1.15;
        clickPowerBuyPrice = roundUp(clickPowerBuyPrice, 0);
        updCookies();
        updClickPowerStats();
        updClickPower();
        itemBoughtSFX();
    }
}

slavesBuyPrice = 15;
slavesAmount = 0;
var btn2 = document.getElementById("button2");
btn2.addEventListener("click", clickSlavesBuy);

// Click Slaves Buy
function clickSlavesBuy(){
    if (times >= slavesBuyPrice){
        times = times - slavesBuyPrice;
        afkSumTotal = afkSumTotal + (1 * workerUpgradeMultiplier);
        slavesAmount = slavesAmount + 1;
        slavesBuyPrice = slavesBuyPrice * 1.15;
        slavesBuyPrice = roundUp(slavesBuyPrice, 0)
        updSlaves();
        updCookies();
        itemBoughtSFX();
    }
}

// Click Cookie
clickPower = 1;
clickPowerMultiplier = 1;
clickPowerFinal = clickPower * clickPowerMultiplier;
times = 0;
function displayMessage(){
    times = times + clickPowerFinal;
    updCookies();
    cpsCheck = cpsCheck + 1;
}   

clickPowerMultiplierPrice = 5000;
// Click Power Doubles
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", clickPowerMultiplierFunc);
function clickPowerMultiplierFunc() {
    if (times >= clickPowerMultiplierPrice) {
        times = times - clickPowerMultiplierPrice;
        clickPowerMultiplier = clickPowerMultiplier * 2;
        clickPowerMultiplierPrice = clickPowerMultiplierPrice * 20;
        clickPowerMultiplierPrice = roundUp(clickPowerMultiplierPrice, 0)
        updClickMultiplier();
        updCookies();
        itemBoughtSFX();
        updClickPowerStats()
    }
}



// Roundup Func
function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

// get reference to button
var btn = document.getElementById("myBtn");
// add event listener for the button, for action "click"
btn.addEventListener("click", displayMessage);


// CPS Ending TODO
var cpsCheck = 0;
var cpsCheckTime = 0;

setInterval(() => {
    // cps
    if (cpsCheck >= 18){
        cpsCheckTime += 1;
    }
    else if (cpsCheck <= 11){
        cpsCheckTime = 0;
    }

    //cps counter
    if (cpsCheckTime >= 10){
        // window.location.reload();
    }
    cpsCheck = 0;
}, 1000);

// AFK Ending TODO
var edAFKCount = 0;
var edAFKCountTemp = 0;

setInterval(() => {
    if (cpsCheck >= 1){
        edAFKCount = 0;
    }
    else if (cpsCheck == 0){
        edAFKCount += 1;
    }
    if (edAFKCount >= 3600){
        console.log('govno))')
    }
}, 1000);






//cookies per second stuff
afkSumTotal = 0;
timesRounded = 0;
interestRate = 0;

// FPS function
setInterval(() => {
    // Interest if theres more than 10 workers
    if (slavesAmount >= 10) {
        interestRate = times * 0.0021;
    }
    else {
        interestRate = 0;
    }
    // Cookies Per Second stuff 2 (The grand remix)
    times = times + (afkSumTotal + doomFacIncome + interestRate)/30;
    timesRounded = roundUp(times, 0);
    updCookies();
}, 34);



// Zero Fix Func
function zeroFix(){
    if(times <= -1){
        times = 0;
    }
}





// SFXs
var btnClick = new Audio("items/cookieClick.wav");
var upReady = new Audio("items/upReady.wav")
var itemBought = new Audio("items/upgradeBought.wav")
var scream1 = new Audio("items/scream1.mp3")
var scream2 = new Audio("items/scream2.mp3")
var scream3 = new Audio("items/scream3.mp3")
var burn = new Audio("items/burn.mp3")
var crack1 = new Audio("items/crack1.mp3")
var crack2 = new Audio("items/crack2.mp3")
var crack3 = new Audio("items/crack3.mp3")
var cheers = new Audio("items/cheers.mp3")


btnClick.load();

btn.onclick = function() {
    if (audioMuted == false) {
        btnClick.play();
    }
}

itemBought.load()
// SFX buy
function itemBoughtSFX() {
    if (audioMuted == false) {
        itemBought.play()
    }
}

function cheersSFX() {
    if (audioMuted == false) {
        cheers.play()
    }
}

scream1.load()
scream2.load()
scream3.load()
burn.load()

// random for SFX
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function payThePriceSFX() {
    var temp = getRandomInt(3);
    if (audioMuted == false) { 
    if (temp == 0){
        scream1.play()
    }
    if (temp == 1){
        scream2.play()
    }
    if (temp == 2){
        scream3.play()
    }
    burn.play()
}
}

// Sound Plays when upgrade is ready
upReadyTrigger = false;
setInterval(() => {
    if((times >= clickPowerBuyPrice || times >= slavesBuyPrice) && upReadyTrigger == false){
        if (audioMuted == false) {
            upReady.play()
            upReadyTrigger = true;
        }
    }
    else if((times >= clickPowerBuyPrice || times >= slavesBuyPrice) && upReadyTrigger == true){
        null;
    }
    else{
        upReadyTrigger = false;
    }
}, 250);





// Cookies Update || The button has been clicked 0 times!
function updCookies() {
    document.getElementById("count").innerHTML = ('The button has been clicked ' + timesRounded + ' times!');
}

// Slaves Update
function updSlaves() {
    if (workerTier == 1) {
        document.getElementById("button2").innerHTML = (slavesAmount + "x Buy Lazy Clicker Slaves - " + slavesBuyPrice);
    }
    if (workerTier == 2){
        document.getElementById("button2").innerHTML = (slavesAmount + "x Buy Educated Clicker Slaves - " + slavesBuyPrice);
    }
    if (workerTier == 3){
        document.getElementById("button2").innerHTML = (slavesAmount + "x Buy Expassionate Workers - " + slavesBuyPrice);
    }
}

// Click Power Update || 1x Buy Click Power - 50
function updClickPower() {
    document.getElementById("button1").innerHTML = (clickPower + "x Buy Click Power - " + clickPowerBuyPrice);
}

// Click Power Stats Update
function updClickPowerStats() {
    clickPowerFinal = clickPower * clickPowerMultiplier;
    document.getElementById("stats").innerHTML = ("Current Click Power: " + clickPowerFinal);
}

// Click Power Mult Update || 0x Cookie Twinner - 5000
function updClickMultiplier() {
    document.getElementById("button3").innerHTML = (clickPowerMultiplier + "x Cookie Twinner - " + clickPowerMultiplierPrice);
}




// Doomfac
var btn4 = document.getElementById("button4");
btn4.addEventListener("click", buyDoomFac);
var btn4e = document.getElementById("button4e");
btn4e.addEventListener("click", payThePrice);

doomFacsCount = 0;
doomFacsPrice = 35000;
var doomFacIncome = 0;
var doomFacStacks = 0;
var doomFacPeopleFed = 0;

function buyDoomFac() {
    if (times >= 35000 && doomFacsCount == 0) {
        doomFacsCount += 1;
        document.getElementById("button4").innerHTML = (' 🏭 In Progress...');
        times -= 35000;
        $('#button4e').show(1000);
        itemBoughtSFX()
        updCookies()
        doomFacStacks += 10;
        doomFacIncome = 500;
    }
}

funnyDoomFacTimer = 0;
setInterval(() => {
    if (funnyDoomFacTimer <= 60 && doomFacsCount >= 1){
        funnyDoomFacTimer += 1;
    }
    else if (funnyDoomFacTimer > 60 && doomFacStacks > 0){
        doomFacStacks -= 1;
        doomFacIncome -= 150;
        funnyDoomFacTimer = 0;
    }
}, 1000);

function payThePrice(){
    if (slavesAmount >= 1 && doomFacStacks <= 9){
    slavesAmount -= 1;
    slavesBuyPrice = roundUp((slavesBuyPrice * 0.885), 0);
    updSlaves()
    funnyDoomFacTimer = 0;
    doomFacStacks += 1;
    doomFacIncome += 175;
    doomFacPeopleFed += 1;
    payThePriceSFX()
    }
}

// Mute Audio || muteButtonHTML

var muteBtn = document.getElementById("muteButtonHTML");
muteBtn.addEventListener("click", muteAudio);

audioMuted = false;
function muteAudio() {
    if (audioMuted == false){
        document.getElementById("muteState").innerHTML = ("Audio is muted!")
        audioMuted = true;
    }
    else if (audioMuted == true) {
        document.getElementById("muteState").innerHTML = ("Audio is active!")
        audioMuted = false;
    }
}

// Worker Upgrades \\ button6

var btn5 = document.getElementById("button5");
btn5.addEventListener("click", buyWorkerUpgrade1);
var btn6 = document.getElementById("button6");
btn6.addEventListener("click", buyWorkerUpgrade2);

workerUpgradeMultiplier = 1;
workerTier = 1;

function buyWorkerUpgrade1() {
    if (times >= 12500 && workerTier == 1) {
        workerUpgradeMultiplier = 2;
        workerTier = 2;
        document.getElementById("button5").innerHTML = ('Bought!');
        times -= 12500;
        slavesBuyPrice *= 2;
        afkSumTotal += slavesAmount;
        $('#button5').delay(3000).hide(1000);
        updSlaves()
        itemBoughtSFX()
        updCookies()
        cheersSFX()
    }
}

function buyWorkerUpgrade2() {
    if (times >= 150000 && workerTier == 2) {
        workerUpgradeMultiplier = 10;
        workerTier = 3;
        document.getElementById("button6").innerHTML = ('Bought!');
        times -= 150000;
        slavesBuyPrice *= 2;
        afkSumTotal += slavesAmount*8;
        $('#button6').delay(3000).hide(1000);
        updSlaves()
        itemBoughtSFX()
        updCookies()
        cheersSFX()
    }
}