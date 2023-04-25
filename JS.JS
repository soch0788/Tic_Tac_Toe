function playerChoice() {
    if (this.firstChild.textContent == ""){
    this.firstChild.textContent = "X"
    let location = this.classList[0].slice(4,6)
    let xloc = location.slice(0,1)
    let yloc = location.slice(1,2)
    gridtracker(xloc,yloc,"x")
    }
    else {
        this.classList.add("Error")
    }
}

function removeTransition() {
    this.classList.remove("Error");
  }

function gridtracker(xloc,yloc,player) {
    gridtrack[xloc][yloc] = player
    console.log(gridtrack)
}










let gridtrack = [["","",""],["","",""],["","",""]]
let gridchoice = document.querySelectorAll(".Grid")
gridchoice.forEach(a => a.addEventListener("click", playerChoice))
gridchoice.forEach(key => key.addEventListener("transitionend", removeTransition));