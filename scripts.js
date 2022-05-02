"use strict";
let times = 0;


let onlyClicks = true;
// Click Cookie
let clickPower = 1;
let clickPowerMultiplier = 1;
let clickPowerFinal = clickPower * clickPowerMultiplier;
//cookies per second stuff
let afkSumTotal = 0;
let timesRounded = 0;
let interestRate = 0;


// btn1
let clickPowerBuyPrice = 50;
let btn1 = document.getElementById("button1");
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
    else {
        errorSFX()
    }
}

let slavesBuyPrice = 15;
let slavesAmount = 0;
let btn2 = document.getElementById("button2");
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
        onlyClicks = false;
    }
    else {
        errorSFX()
    }
}




function displayMessage(){
    times = times + clickPowerFinal;
    updCookies();
    cpsCheck = cpsCheck + 1;
    gameStart()
}   

let timerStarted = false;

function gameStart() {
    if (timerStarted == false){
    timerStarted = true;
    timerStart()
    $('#timerIntro').delay(5000).fadeOut(2500);
    }
    else {
        null
    }
}

let clickPowerMultiplierTier = 1;
let clickPowerMultiplierPrice = 5000;
// Click Power Doubles
var btn3 = document.getElementById("button3");
btn3.addEventListener("click", clickPowerMultiplierFunc);
function clickPowerMultiplierFunc() {
    if (times >= clickPowerMultiplierPrice && clickPowerMultiplierTier < 4) {
        times = times - clickPowerMultiplierPrice;
        clickPowerMultiplier = clickPowerMultiplier * 2;
        clickPowerMultiplierPrice = clickPowerMultiplierPrice * 4;
        clickPowerMultiplierTier += 1;
        clickPowerMultiplierPrice = roundUp(clickPowerMultiplierPrice, 0)
        updClickMultiplier();
        updCookies();
        itemBoughtSFX();
        updClickPowerStats()
        if (clickPowerMultiplierTier == 4){
            document.getElementById("button3").innerHTML = ('Bought!');
            $('#button3').delay(3000).hide(1000);
        }
    }
    else {
        errorSFX()
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
        goodGame('You have been arrested due to Drug Abuse', 'It is quite a horrible sight seeing cops T-Posing near your jail cell...', 'items/jailed.png', 'items/cheers.mp3')
    }
    if (cpsCheck >= 100) {
        goodGame('You have been arrested due to Drug Abuse', 'It is quite a horrible sight seeing cops T-Posing near your jail cell...', 'items/jailed.png', 'items/cheers.mp3')
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
    if (edAFKCount >= 3600 && edAFKCountTemp == 0 && times <= 100){
        edAFKCountTemp += 1;
        goodGame('Who needs cookies anyway?', 'You decided to take a better turn in life!', 'items/noCookies.png', 'items/cheers.mp3')
    }
}, 1000);



// golem moment

let golemActivated = false;
let golemMultiplier = 1;

function buyGolem() {
    if (golemActivated == false) {
        golemActivated = true;
        golemMultiplier = 0.05;
        document.getElementById("buttonGolem").innerHTML = ('Activated...?');
        $('#buttonGolem').delay(3000).hide(1000);
        times += 10000;
        itemBoughtSFX()
        updCookies()
    }
    else {
        errorSFX()
    }   
}

// FPS function
setInterval(() => {
    // Interest if theres more than 10 workers
    if (slavesAmount >= 10 && doomFacPeopleFed <= 10) {
        interestRate = times * slavesAmount * 0.00017;
    }
    else {
        interestRate = 0;
    }
    // Cookies Per Second stuff 2 (The grand remix)
    times = times + (afkSumTotal + (doomFacIncome * golemMultiplier) + interestRate)/30;
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
var errorS = new Audio("items/error.mp3")

function errorSFX() {
    if (audioMuted == false) {
        errorS.play()
    }
}


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
let upReadyTrigger = false;
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
let btn4 = document.getElementById("button4");
btn4.addEventListener("click", buyDoomFac);
let btn4e = document.getElementById("button4e");
btn4e.addEventListener("click", payThePrice);

let doomFacsCount = 0;
let doomFacsPrice = 35000;
let doomFacsTier = 1;
let doomFacIncome = 0;
let doomFacStacks = 0;
let doomFacPeopleFed = 0;

function buyDoomFac() {
    if (times >= 35000 && doomFacsCount == 0) {
        doomFacsCount += 1;
        document.getElementById("button4").innerHTML = (' 🏭 In Progress...');
        document.getElementById("button4").style.backgroundColor = ('#b5b5b5');
        times -= 35000;
        $('#button4e').show(1000);
        itemBoughtSFX()
        updCookies()
        doomFacStacks += 10;
        doomFacIncome = 500;
        onlyClicks = false;
    }
    else {
        errorSFX()
    }
}
 // #e9d1b8
 let funnyDoomFacTimer = 0;
 let colorWhiteSwitch = true;
setInterval(() => {
    if (doomFacsTier == 1){
        if (funnyDoomFacTimer <= 30 && doomFacsCount >= 1){
            funnyDoomFacTimer += 1;
        }
        else if (funnyDoomFacTimer > 30 && doomFacStacks > 0){
            doomFacStacks -= 1;
            doomFacIncome -= 150;
            funnyDoomFacTimer = 0;
        }
        if (doomFacStacks == 10) {
            document.getElementById("button4e").style.cursor = ('no-drop');
            document.getElementById("button4e").style.backgroundColor = ('#b5b5b5');
        }
        else if (doomFacStacks >= 5 && doomFacStacks < 10 && slavesAmount >= 1) {
            document.getElementById("button4e").style.cursor = ('pointer');
            document.getElementById("button4e").style.backgroundColor = ('#e9d1b8');
        }
        else if (doomFacStacks < 5 && slavesAmount >= 1){
            document.getElementById("button4e").style.cursor = ('pointer');
            document.getElementById("button4e").style.backgroundColor = ('#d49048');
        }
    }
    else if (doomFacsTier == 2){
        if (funnyDoomFacTimer <= 3 && doomFacsCount >= 1){
            funnyDoomFacTimer += 1;
        }
        else if (funnyDoomFacTimer > 3 && doomFacStacks > 0){
            doomFacStacks -= 1;
            doomFacIncome -= 2000;
            funnyDoomFacTimer = 0;
        }
        if (doomFacStacks == 25) {
            document.getElementById("button4e").style.cursor = ('no-drop');
            document.getElementById("button4e").style.backgroundColor = ('#b5b5b5');
        }
        else if (doomFacStacks > 10 && doomFacStacks < 25) {
            document.getElementById("button4e").style.cursor = ('pointer');
            document.getElementById("button4e").style.backgroundColor = ('#e9d1b8');
        }
        else if (doomFacStacks <= 10){
            document.getElementById("button4e").style.cursor = ('no-drop');
            $("#button4e").animate({
                backgroundColor: "#E57543",
            }, 10000 );
            document.getElementById("button4").innerHTML = ('🔥💀🔥...sur');
            document.getElementById("button4e").innerHTML = ('vive...🔥💀🔥');
            $("#button4").animate({
                backgroundColor: "#E57543",
            }, 10000 );
        }
    }
    //Random Timer I forgor... bru skull || facSpeech1
    
    if (golemActivated == true) {
        if (times <= 0) {
            times += 5000;
            updCookies()
        }
        else if (times > 0) {
            times = times + (times * 0.0021)
            updCookies()
        }
        if (times > 100000 && times <= 200000){
            $('#facSpeech1').show(1000);
        }
        if (times > 200000 && times <= 300000){
            $('#facSpeech1').hide(1000);
            $('#facSpeech2').show(1000);
        }
        if (times > 300000 && times <= 400000){
            $('#facSpeech2').hide(1000);
            $('#facSpeech3').show(1000);
        }
        if (times > 400000 && times <= 500000){
            $('#facSpeech3').hide(1000);
            $('#facSpeech4').show(1000);
        }
        if (times > 500000 && times <= 600000){
            $('#facSpeech4').hide(1000);
            $('#facSpeech5').show(1000);
        }
        if (times > 600000){
            $('#facSpeech1').hide(1000);
            $('#facSpeech2').hide(1000);
            $('#facSpeech3').hide(1000);
            $('#facSpeech4').hide(1000);
            $('#facSpeech5').hide(1000);
        }
        if (times <= 100000){
            $('#facSpeech1').hide(1000);
            $('#facSpeech2').hide(1000);
            $('#facSpeech3').hide(1000);
            $('#facSpeech4').hide(1000);
            $('#facSpeech5').hide(1000);
        }
    }
    //   
    if (times >= 0 && colorWhiteSwitch == false) {
        colorWhiteSwitch = true;
        $("#bodyColored").animate({
            backgroundColor: "#fff",
        }, 2000 );
    }
    //   
    if (times < 0 && colorWhiteSwitch == true) {
        colorWhiteSwitch = false;
        $("#bodyColored").animate({
            backgroundColor: "#733737",
        }, 2000 );
    }

    }, 1000);

function payThePrice(){
    if (doomFacsTier == 1) {
        if (slavesAmount >= 1 && doomFacStacks <= 9 && doomFacsTier == 1){
            slavesAmount -= 1;
            slavesBuyPrice = roundUp((slavesBuyPrice * 0.885), 0);
            updSlaves()
            funnyDoomFacTimer = 0;
            doomFacStacks += 1;
            doomFacIncome += 150;
            doomFacPeopleFed += 1;
            payThePriceSFX()
            $("#button2").animate({
                backgroundColor: "#aa0000",
              }, 250 ).animate({
                backgroundColor: "#e9d1b8",
              }, 1000);
              times += 1000;
            }
            else {
                errorSFX()
            }
    }
    if (doomFacsTier == 2) {
        if (slavesAmount >= 1 && doomFacsTier == 2 && (doomFacStacks >= 11 && doomFacStacks <= 24)){
            slavesAmount -= 1;
            slavesBuyPrice = roundUp((slavesBuyPrice * 0.887), 0);
            updSlaves()
            funnyDoomFacTimer = 0;
            doomFacStacks += 1;
            doomFacIncome += 2000;
            doomFacPeopleFed += 1;
            payThePriceSFX()
            $("#button2").animate({
                backgroundColor: "#aa0000",
              }, 250 ).animate({
                backgroundColor: "#e9d1b8",
              }, 1000);
              times += 1000;
            }
        else if (slavesAmount >= 1 && doomFacStacks <= 9 && doomFacsTier == 2) {
            errorSFX()
        }
        else {
            errorSFX()
        }
    }
    
}

function upgradeDoomFac() {
    if (times >= 350000 && doomFacPeopleFed >= 10 && doomFacsTier == 1) {
        times -= 350000;
        document.getElementById("button7").innerHTML = ('Good Luck!');
        
        $('#button7').delay(3000).hide(1000);
        doomFacsTier = 2;
        doomFacStacks = 25;
        doomFacIncome = 10000;
        itemBoughtSFX()
        updCookies()
    }
}



// Mute Audio || muteButtonHTML

let muteBtn = document.getElementById("muteButtonHTML");
muteBtn.addEventListener("click", muteAudio);

let audioMuted = false;
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

let btn5 = document.getElementById("button5");
btn5.addEventListener("click", buyWorkerUpgrade1);
let btn6 = document.getElementById("button6");
btn6.addEventListener("click", buyWorkerUpgrade2);

let workerUpgradeMultiplier = 1;
let workerTier = 1;

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

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerRef = document.querySelector('.cookieTimer');
let timerRef2 = document.querySelector('.cookieTimer2');
let int = null;

function timerStart() {
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}

function timerPause() {
    clearInterval(int);
}

function resetTimer() {
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
}

function displayTimer() {
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h,m,s,ms
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
    timerRef2.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

let loanTaken = false;
function takeLoan() {
    if (loanTaken == false) {
        loanTaken = true;
        document.getElementById("buttonLoan").innerHTML = ('Loan Taken!');
        $('#buttonLoan').delay(3000).hide(1000);
        itemBoughtSFX()
        updCookies()
        times += 5000;
    }
    else {
        errorSFX()
    }
}



// setInterval(() => {
//         doGameTick()
// }, 250);

// function doGameTick() {
//     if (frozen == true){
//         return
//     }
    
// }