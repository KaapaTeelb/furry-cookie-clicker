
// overlayButton
var overlayBtn = document.getElementById("overlayButton");
overlayBtn.addEventListener("click", on);

function goodGame(title, description, image) {
    
}

function on() {
    document.getElementById("overlay").style.display = "block";
    console.log('hi')
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
    console.log('hi2')
} 