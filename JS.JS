function playerChoice() {
    let location = this.classList[0].slice(4,6)
    let xloc = location.slice(0,1)
    let yloc = location.slice(1,2)
    if (gridtrack[xloc][yloc]== ""){
        console.log(this.firstChild.textContent)
        playGame()
        this.firstChild.textContent = turn
        gridtracker(xloc,yloc,turn)
        turncount += 1
    if (turncount == 9){
        console.log("draw")
    }
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
    if (gridtrack[xloc][0] == gridtrack[xloc][1] && gridtrack[xloc][2] == gridtrack[xloc][0] && gridtrack[xloc][0] == player ){
        endGame(player)
    }
    if (gridtrack[0][yloc] == gridtrack[1][yloc] && gridtrack[2][yloc] == gridtrack[0][yloc] && gridtrack[0][yloc] == player ){
        endGame(player)
    }
    if (yloc != 1 && xloc != 1){
        if(gridtrack[0][0] == player && gridtrack[0][0] == gridtrack[1][1] && gridtrack[2][2]==gridtrack[0][0]){
            endGame(player)
        }
        if(gridtrack[2][0] == player && gridtrack[2][0] == gridtrack[1][1] && gridtrack[0][2]==gridtrack[0][0]){
            endGame(player)
        }
    }
}

function endGame(player) {
    console.log("winner is ", player)
    for (let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if (gridtrack[i][j] == ""){
                gridtrack[i][j] = "A"
                gridtrack[i][j].textContent = " A"
            }
        }
    }

}


function playGame() {
    let winner = false

        if (turncount % 2 == 0){
            turn = "X"
        }
        else {
            turn = "O"
        }


}

function newGame() {
    turn = "x"
    turncount = 0
    for (let i=0;i<3;i++){
        for(let j=0;j<3;j++){
                gridtrack[i][j] = ""
                gridtrack[i][j].textContent = ""
            }
        }
    }



let turncount = 0
let turn = "x"



let gridtrack = [["","",""],["","",""],["","",""]]
newGame()
// playGame()

let gridchoice = document.querySelectorAll(".Grid")
gridchoice.forEach(a => a.addEventListener("click", playerChoice))
gridchoice.forEach(key => key.addEventListener("transitionend", removeTransition));
let resetB = document.querySelector(".reset")
resetB.addEventListener("click", newGame)
