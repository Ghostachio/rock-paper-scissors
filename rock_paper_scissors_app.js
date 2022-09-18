let playerPlay = (prompt('enter your move here:').toLowerCase())

function getComputerPlay(){
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let getRandom = Math.random()
        if (getRandom <= 0.33){
            return rock;
        }else if (getRandom > 0.34 && getRandom <= 0.66){
            return paper;
        }else return scissors;
}

function roundPlay (playerPlay,computerPlay){
    let tie = 'its a tie';
    let lose = 'you lose';
    let win = 'you win';
        if (playerPlay === computerPlay){
            return tie;
        }else if ((playerPlay === 'rock') && ( computerPlay === 'paper')){
            return lose
        }else if ((playerPlay === 'paper') && ( computerPlay === 'scissors')){
            return lose
        }else if ((playerPlay === 'scissors') && ( computerPlay === 'rock')){
            return lose
        } else return win
    }

    console.log(roundPlay(playerPlay,getComputerPlay()))
