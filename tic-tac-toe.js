const gameboard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const replayBtn = document.querySelector('.replay-btn')
const startCell = [
                   '', '', '', '', '', '', '', '', ''
                ]

let go = "circle"
infoDisplay.textContent = " Circle goes first"

function createBoard(){
       startCell.forEach((cell,index)  => {
       const cellElement = document.createElement('div')
       cellElement.classList.add('square')
       cellElement.id=index
       replayBtn.style.display = 'none'
       replayBtn.textContent = 'Replay'
       cellElement.addEventListener('click', addGo)
       gameboard.append(cellElement)
   })

}
createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = go + "'s" + " turn"
    e.target.removeEventListener('click', addGo)
    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll('.square')
     const winningCombo = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
     ]

    winningCombo.forEach(array => {
        //does first child of a certain square element conatining a circle or cross class
        //have that specific class name in any of the 8 winning combo patterns? if so, we've got a winner
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
        if(circleWins){
            infoDisplay.textContent = "Circle Won!"
            infoDisplay.classList.add('circle-won')
            replayBtn.style.display = 'block'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
     })
    winningCombo.forEach(array => {
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))
        if(crossWins){
            infoDisplay.textContent = "Cross Won!"
            infoDisplay.classList.add('cross-won')
            replayBtn.style.display = 'block'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
         }
     })
     
   // Code for draw goes here  
    /* startCell.forEach((cell)=>{
            while(cell.firstchild = 'circle' ){
             infoDisplay.textContent = 'Match has been drawn'
             infoDisplay.style.color
            }
        })*/
    }

replayBtn.addEventListener('click', replayGame)

function replayGame(){
    window.location.reload(true)
}


     //Write a code for a draw
     //Create a button to restart the game     ----> DONE!
     // const draw = array(cell => allsquares[cell].firstchild)
    /* if(allSquares.firstChild.classList.contains('circle') 
        allSquares.firstChild.classList.contains('cross')){
        infoDisplay.textContent="Game Ended with no winner! "
       }*/
    