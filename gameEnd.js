
// overlayButton
var overlayBtn = document.getElementById("overlayButton");
// overlayBtn.addEventListener("click", on);


function goodGame(title, description, image, sfx) {
    var win = new Audio(sfx);
    document.getElementById("victoryName").innerHTML = (title);
    document.getElementById("victoryDesc").innerHTML = (description);
    document.getElementById("victoryImg").src = (image);
    if (audioMuted == false) {
        win.play();
    }
    on()
}

function on() {
    timerPause()
    document.getElementById("overlay").style.display = "block";
    console.log('off() to go back to game?')
    document.getElementById("count2").innerHTML = (document.getElementById("count").innerHTML);
    $('#count').hide()
    $('#count2').show()
}
  
function off() {
    timerStart()
    document.getElementById("overlay").style.display = "none";
    console.log('on() to end it again, to idk why')
} 