function getComputerChoice(){
    let randomResult = Math.floor(Math.random() * 3) + 1;

    if(randomResult === 1){
        return 'rock';
    }else if(randomResult === 2){
        return 'paper';
    }else if(randomResult === 3){
        return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Choose one: rock/paper/scissors');
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        function playRound(humanChoice, computerChoice){
            console.log(`You chose: ${humanChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
            if(humanChoice === 'rock' && computerChoice === 'scissors'){
                humanScore++;
                return 'You win! Rock beats Scissors';
            }else if(humanChoice === 'paper' && computerChoice === 'rock'){
                humanScore++;
                return 'You win! Paper beats Rock'
            }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
                humanScore++;
                return 'You win! Scissors beats Paper'
            }else if(computerChoice === 'rock' && humanChoice === 'scissors'){
                computerScore++
                return 'You lose! Rock beats Scissors'
            }else if(computerChoice === 'scissors' && humanChoice === 'paper'){
                computerScore++
                return 'You lose! Scissors beats Paper'
            }else if(computerChoice === 'paper' && humanChoice === 'rock'){
                computerScore++
                return 'You lose! Paper beats Rock'
            }else{
                return 'Tie';
            }
        }
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection,computerSelection));
    }
    let finalScores = 'Human score: ' + humanScore + ' Computer score: ' + computerScore;
    return finalScores;
}
console.log(playGame());
