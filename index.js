// rock paper scissors
// the functions playerSelection vs computerSelection
// random computer generated
// 5 rounds
// end of every round return a string like "You Lose! Paper beats Rock"
const options = [`rock`, `paper`, `scissors`]

function computerChoice(){
// random input for computer
    const choice = options[Math.floor(Math.random()* options.length)];
    return choice
}
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelectionSelection){
        return `Tie!`;
    }
    else if(
        (playerSelection == `rock` && computerSelection == `scissors`) ||
        (playerSelection == `scissors` && computerSelection == `paper`) ||
        (playerSelection == `paper` && computerSelection == `rock`)
    ){
        return `Player`;
    } 
    else {
        return `Computer`;
    }   

}
console.log(checkWinner)
function playRound(playerSelection, computerSelection){


}
computerChoice();
// function game() {
// // play
// // five rounds
// // console based
// }

// function playRound(playerSelection, computerSelection){
//     // end of every round return a string like "You Lose! Paper beats Rock"
//     const playerSelection =
// }

// function playerChoice {
// // input from player
// }

