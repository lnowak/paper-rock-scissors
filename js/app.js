document.addEventListener('DOMContentLoaded', function() {
    
    let body = document.querySelector('body');
    let newDiv = document.createElement("div");
    body.appendChild(newDiv);
    newDiv.classList.add('fullScreen');
    newDiv.innerText = 'Choose opponent'
    console.log(newDiv)
    let newDiv1 = document.createElement("div");
    newDiv.appendChild(newDiv1);
    newDiv1.classList.add('playerChoose');
    let newButton1 = document.createElement("button");
    newDiv1.appendChild(newButton1);
    newButton1.classList.add('opponent');
    newButton1.innerText = 'Player'
    let newButton2 = document.createElement("button");
    newDiv1.appendChild(newButton2);
    newButton2.classList.add('opponent');
    newButton2.innerText = 'Computer'
    let newDiv2 = document.createElement("div");
    newDiv.appendChild(newDiv2);
    newDiv2.classList.add('maxRound');
    newDiv2.innerText = 'Max round to win: '
    let newInput = document.createElement("ul");
    newDiv2.appendChild(newInput);
    newInput.classList.add('mr');
    let newLi1 = document.createElement("li");
    newInput.appendChild(newLi1);
    newLi1.innerText = '1';
    let newLi2 = document.createElement("li");
    newInput.appendChild(newLi2);
    newLi2.innerText = '3';
    let newLi3 = document.createElement("li");
    newInput.appendChild(newLi3);
    newLi3.innerText = '5';
    let newButton = document.createElement('button');
    newDiv.appendChild(newButton);
    newButton.classList.add('play');
    newButton.innerText='Play';
    let opponent = document.querySelectorAll('.opponent');
    let lis = document.querySelector('.mr').children;
    let maxR = 0;
    let plr = 0;
    // let sb2 = document.querySelector('.sb2');

    for (let i=0; i<opponent.length; i++) {
        opponent[i].addEventListener('click', function() {
            console.log(this.innerText)
            if (this.innerText === 'Player') {
                plr = 0;
            } else {
                plr = 1;
                // sb2.innerText = 'Computer : '
                // let newSpan = document.createElement("span");
                // sb2.appendChild(newSpan);
                // newSpan.classList.add('score2');
                // newSpan.innerText = 0;
            }
        })
    }

    for (let i=0; i<lis.length; i++){
        lis[i].addEventListener('click', function(){
            maxR = Number(this.innerText);
            this.style.backgroundColor = 'red';
            
            
        })
    }

    newButton.addEventListener('click', function(e){
        
        if(maxR !== 0) {
            newDiv.parentElement.removeChild(newDiv)
        }

    })


    let btn = document.querySelectorAll('.btn');
    let counter = 0;
    let score1 = document.querySelector('.score1');
    let sc1 = Number(score1.innerText);
    let score2 = document.querySelector('.score2');
    let sc2 = Number(score2.innerText);
    let ch1 = '';
    let ch2 = '';




    for (let i=0; i<btn.length; i++){
        btn[i].addEventListener('click', function(){
            
            if ( plr === 0) {
                counter++;

                if(counter % 2 !== 0) {
                    ch1 = this.dataset.name;
                } else {
                    ch2 = this.dataset.name;
                }

                if (ch1 === 'paper' && ch2 === 'rock' || ch1 === 'rock' && ch2 === 'scissors' || ch1 === 'scissors' && ch2 === 'paper') {
                    sc1++;
                    score1.innerText = sc1;
                    console.log('p1+')
                    ch1 = '';
                    ch2 = '';
                } else if (ch2 === 'paper' && ch1 === 'rock' || ch2 === 'rock' && ch1 === 'scissors' || ch2 === 'scissors' && ch1 === 'paper') {
                    sc2++;
                    score2.innerText = sc2;
                    console.log('p2+')
                    ch1 = '';
                    ch2 = '';
                } else if (ch2 === 'paper' && ch1 === 'paper' || ch2 === 'rock' && ch1 === 'rock' || ch2 === 'scissors' && ch1 === 'scissors') {
                    console.log('remis')
                    ch1 = '';
                    ch2 = '';
                } 
            }

            if (plr === 1) {
                ch1 = this.dataset.name;
                let num = Math.round((Math.random() * (3-1))+1);
                if ( num === 1) {
                    ch2 = 'paper';
                } else if (num === 2) {
                    ch2 = 'rock';
                } else {
                    ch2 = 'scissors';
                }

                if (ch1 === 'paper' && ch2 === 'rock' || ch1 === 'rock' && ch2 === 'scissors' || ch1 === 'scissors' && ch2 === 'paper') {
                    sc1++;
                    score1.innerText = sc1;
                    console.log('p1+')
                    ch1 = '';
                    ch2 = '';
                } else if (ch2 === 'paper' && ch1 === 'rock' || ch2 === 'rock' && ch1 === 'scissors' || ch2 === 'scissors' && ch1 === 'paper') {
                    sc2++;
                    score2.innerText = sc2;
                    console.log('p2+')
                    ch1 = '';
                    ch2 = '';
                } else if (ch2 === 'paper' && ch1 === 'paper' || ch2 === 'rock' && ch1 === 'rock' || ch2 === 'scissors' && ch1 === 'scissors') {
                    console.log('remis')
                    ch1 = '';
                    ch2 = '';
                } 
                console.log(sc1, sc2)

            }
            
            if (sc1 === maxR) {
                console.log('Player 1 won');
            } else if (sc2 === maxR) {
                console.log('Player 2 won');
            }

        })
    }
})
