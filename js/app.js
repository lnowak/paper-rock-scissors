document.addEventListener('DOMContentLoaded', function() {
    
    const preFullScreen = document.querySelector('.preFullScreen')
    const opponent = document.querySelectorAll('.opponent');
    const maxRound = document.querySelectorAll('.mr li');
    let maxRoundNumber = 0;
    const playButton = document.querySelector('.playButton');
    let player = 0;
    
    opponent.forEach(e => {e.addEventListener('click', () => {e.innerText === 'Player' ? player=0 : player=1})});
    maxRound.forEach(e => {
        e.addEventListener('click', () => {
            maxRoundNumber = Number(e.innerText);
            e.classList.toggle('chcecked');
        })
    })
    playButton.addEventListener('click', () =>{ maxRoundNumber === 0 ? null : preFullScreen.style.display='none'})

    const selectBtn = document.querySelectorAll('.selectBtn');
    let counter = 0;
    let score1 = document.querySelector('.score1');
    let score2 = document.querySelector('.score2');
    let score1Number = Number(score1.innerText);
    let score2Number = Number(score2.innerText);
    let Player1Choice;
    let Player2Choice;

    selectBtn.forEach(e => {
        e.addEventListener('click', () => {
            
            const playGame = () => {
                if (Player1Choice === 'paper' && Player2Choice === 'rock' || Player1Choice === 'rock' && Player2Choice === 'scissors' || Player1Choice === 'scissors' && Player2Choice === 'paper') {
                    score1Number++;
                    score1.innerText = score1Number;
                    Player1Choice = '';
                    Player2Choice = '';
                } else if (Player2Choice === 'paper' && Player1Choice === 'rock' || Player2Choice === 'rock' && Player1Choice === 'scissors' || Player2Choice === 'scissors' && Player1Choice === 'paper') {
                    score2Number++;
                    score2.innerText = score2Number;
                    Player1Choice = '';
                    Player2Choice = '';
                } else if (Player2Choice === 'paper' && Player1Choice === 'paper' || Player2Choice === 'rock' && Player1Choice === 'rock' || Player2Choice === 'scissors' && Player1Choice === 'scissors') {
                    Player1Choice = '';
                    Player2Choice = '';
                }
            }

            if (player === 0) {
                counter++;
                counter % 2 !== 0 ? Player1Choice = e.dataset.name : Player2Choice = e.dataset.name;
                playGame();
            }

            if (player === 1) {
                Player1Choice = e.dataset.name
                let randomNumber = Math.round((Math.random() * (3-1))+1);
                if ( randomNumber === 1) {
                    Player2Choice = 'paper';
                } else if (randomNumber === 2) {
                    Player2Choice = 'rock';
                } else {
                    Player2Choice = 'scissors';
                }
                playGame();
            }

            if (score1Number === maxRoundNumber) {
                console.log('Player 1 won');
            } else if (score2Number === maxRoundNumber) {
                console.log('Player 2 won');
            }
        })
    })
})
