const txtArea = document.querySelector('.text-area');
const btnContainer = document.querySelector('.button-container');
let btnStart = document.querySelector('.btn-start');
let playerScore = 0;
let cpuScore = 0;

/* Click the button to start the game */
btnStart.addEventListener('click', startGame);

function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);
   let option;
   if (random===0){ option = 'ROCK'; }
   if (random===1){ option = 'PAPER'; }
   if (random===2){ option = 'SCISSORS'; }
   return option;
}

function playOneRound(playerOption,cpuOption){
   let p = document.createElement('p');
   p.textContent = "Your "+playerOption+" against the CPUs "+cpuOption+"!";
   txtArea.appendChild(p);                //display: "Your 'option' against the CPUs 'option'"

   /*DRAW*/
   if (playerOption == cpuOption){        //display: "This round is a Tie!"
      let newP = document.createElement('p');
      newP.textContent = "This round is a Tie!";
      txtArea.appendChild(newP);
   }
   else{
      let newP = document.createElement('p');
      /*player choses ROCK*/
      if (playerOption == 'ROCK'){
         if(cpuOption == 'PAPER'){        //display: "You Lose this round! Paper beats Rock"
            cpuScore++;
            newP = document.createElement('p');
            newP.textContent = "You Lose this round! Paper beats Rock";
            txtArea.appendChild(newP);
         }
         else{                            //display: "You win this round!! Rock beats Scissors"
            playerScore++;
            newP = document.createElement('p');
            newP.textContent = "You win this round!! Rock beats Scissors";
            txtArea.appendChild(newP);
         }
      }
      /*player choses PAPER*/
      if (playerOption=='PAPER'){
         if(cpuOption=='SCISSORS'){      //display: "You Lose this round!! Scissors beats Paper"
            cpuScore++;
            newP = document.createElement('p');
            newP.textContent = "You Lose this round!! Scissors beats Paper";
            txtArea.appendChild(newP);
         }
         else{                           //display: "You win this round!! Paper beats Rock"
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Paper beats Rock";
            txtArea.appendChild(newP);
         }
      }
      /*player choses SCISSORS*/
      if (playerOption=='SCISSORS'){
         if(cpuOption=='ROCK'){          //display: "You Lose this round!! Rock beats Scissors"
            cpuScore++;
            newP = document.createElement('p');
            newP.textContent = "You Lose this round!! Rock beats Scissors";
            txtArea.appendChild(newP);
         }
         else{                           //display: "You win this round!! Scissors beats Paper"
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Scissors beats Paper";
            txtArea.appendChild(newP);
         }
      }
   }

   let scoreP = document.createElement('p');
   scoreP.innerHTML = "SCORE POINTS<br/>"+
               "Player:"+playerScore+"<br/>"+
               "CPU:"+cpuScore;
   txtArea.appendChild(scoreP);
}

function startGame(){
   let playerChoice;
   let cpuChoice;
   let ps = document.querySelectorAll('.text-area > p');
   let buttons = document.querySelectorAll('.button-container > button');

   ps.forEach(p => {
      p.remove();
   });
   buttons.forEach(button => {
      button.remove();
   });

   let btnRock = document.createElement('button');
   btnRock.classList.add('btn-rock');
   btnRock.setAttribute("data-option", "ROCK");
   btnRock.textContent = 'ROCK';
   btnContainer.appendChild(btnRock);

   let btnPaper = document.createElement('button');
   btnPaper.classList.add('btn-paper');
   btnPaper.setAttribute("data-option", "PAPER");
   btnPaper.textContent = 'PAPER';
   btnContainer.appendChild(btnPaper);

   let btnScissors = document.createElement('button');
   btnScissors.classList.add('btn-scissors');
   btnScissors.setAttribute("data-option", "SCISSORS");
   btnScissors.textContent = 'SCISSORS';
   btnContainer.appendChild(btnScissors);

   let round1 = document.createElement('p');
   round1.innerHTML = "Round 1 !<br>Choose your Move!";
   txtArea.appendChild(round1);

   let roundOneButtons = document.querySelectorAll('button');
   roundOneButtons.forEach(roundOnebutton => {
      roundOnebutton.addEventListener('click',function(){
         playerChoice = this.getAttribute('data-option');
         cpuChoice = getComputerChoice();
         playOneRound(playerChoice,cpuChoice);
         let round2 = document.createElement('p');
         round2.innerHTML = "Round 2 !<br/>Choose your Move!";
         txtArea.appendChild(round2);

         let roundTwoButtons = document.querySelectorAll('button');
         roundTwoButtons.forEach(roundTwobutton => {
            roundTwobutton.addEventListener('click',function(){
               playerChoice = this.getAttribute('data-option');
               cpuChoice = getComputerChoice();
               playOneRound(playerChoice,cpuChoice);
               let round3 = document.createElement('p');
               round3.innerHTML = "Round 3 !<br/>Choose your Move!";
               txtArea.appendChild(round3);

               let roundThreeButtons = document.querySelectorAll('button');
               roundThreeButtons.forEach(roundThreeButton => {
                  roundThreeButton.addEventListener('click',function(){
                     playerChoice = this.getAttribute('data-option');
                     cpuChoice = getComputerChoice();
                     playOneRound(playerChoice,cpuChoice);
                     let round4 = document.createElement('p');
                     round4.innerHTML = "Round 4 !<br/>Choose your Move!";
                     txtArea.appendChild(round4);

                     let roundFourButtons = document.querySelectorAll('button');
                     roundFourButtons.forEach(roundThreeButton => {
                        roundThreeButton.addEventListener('click',function(){
                           playerChoice = this.getAttribute('data-option');
                           cpuChoice = getComputerChoice();
                           playOneRound(playerChoice,cpuChoice);
                           let round5 = document.createElement('p');
                           round5.innerHTML = "Round 5 !<br/>Choose your Move!";
                           txtArea.appendChild(round5);

                           let roundFiveButtons = document.querySelectorAll('button');
                           roundFiveButtons.forEach(roundThreeButton => {
                              roundThreeButton.addEventListener('click',function(){
                                 playerChoice = this.getAttribute('data-option');
                                 cpuChoice = getComputerChoice();
                                 playOneRound(playerChoice,cpuChoice);
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
         //getGameOver();
      });
   });
}

function getGameOver(){
   let newP = document.createElement('p');
   let btns = document.querySelectorAll('.button-container > button');
   txtArea.appendChild(newP);
   if(playerScore==cpuScore){
      newP.textContent = "IT'S A TIE! You have to play again!";
      txtArea.appendChild(newP);
      startGame();
   }   
   else { 
      if(playerScore>cpuScore){
         newP.textContent = "YOU WIN! CONGRATULATION! THE EARTH IS SAFE NOW";
         txtArea.appendChild(newP);
         btns.remove();
         return;
      }
      else{
         newP.textContent = "YOU LOSE! EVERYONE IS FUCKING DEAD!!!";
         txtArea.appendChild(newP);
         btns.remove();
         return;
      } 
   }
}