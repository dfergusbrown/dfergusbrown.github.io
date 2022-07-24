var greenAlien = Math.floor(Math.random() * 9)
var redAlien = Math.floor(Math.random() * 9)
if (redAlien === greenAlien) {
  var redAlien = Math.floor(Math.random() * 9)
}
console.log(greenAlien, redAlien)
const alien = (alienID) => {
  console.log(alienID)
  if(alienID === redAlien) {
    document.getElementById(alienID).innerHTML = "👹"
    alert("GAME OVER!")
  } else if(alienID === greenAlien) {
    document.getElementById(alienID).innerHTML = "👽"
    alert("YOU WIN!")
  } else if(alienID != redAlien){
    document.getElementById(alienID).innerHTML = "❌"

  }
}
