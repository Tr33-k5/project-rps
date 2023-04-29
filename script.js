const txtArea = document.querySelector('.text-area');
const btnContainer = document.querySelector('.button-container');
let playerScore = 0;
let cpuScore = 0;

/* Click the button to start the game */
let btnStart = document.querySelector('.button-start');
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

function resetGameContainer(i){
   //Select all p markups in '.text-area'
   let ps = document.querySelectorAll('.text-area > p');
   ps.forEach(p => {
      p.remove();
   });
   //Select all buttons in '.button-container'
   let buttons = document.querySelectorAll('button');
   buttons.forEach(button => {
      button.remove();
   });
   btnContainer.setAttribute('id', 'round'+i);

   // Create 'rock' button
   let btnRock = document.createElement('button');
   btnRock.classList.add('button-rock');
   btnRock.setAttribute("data-option", "ROCK");
   btnRock.setAttribute("id","btn-rd"+i);
   btnRock.textContent = 'ROCK';
   btnContainer.appendChild(btnRock);
   //Create 'paper' button
   let btnPaper = document.createElement('button');
   btnPaper.classList.add('button-paper');
   btnPaper.setAttribute("data-option", "PAPER");
   btnPaper.setAttribute("id","btn-rd"+i);
   btnPaper.textContent = 'PAPER';
   btnContainer.appendChild(btnPaper);
   //Create 'scissors button
   let btnScissors = document.createElement('button');
   btnScissors.classList.add('button-scissors');
   btnScissors.setAttribute("data-option", "SCISSORS");
   btnScissors.setAttribute("id","btn-rd"+i);
   btnScissors.textContent = 'SCISSORS';
   btnContainer.appendChild(btnScissors);
}
function round1(){
   resetGameContainer(2);
   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let p = document.createElement('p');
   p.innerHTML = "Round 2 !<br/>Choose your Move!";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+2);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round2);
   });
}

function round2(){
   resetGameContainer(3);
   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let p = document.createElement('p');
   p.innerHTML = "Round 3 !<br/>Choose your Move!";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+3);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round3);
   });
}

function round3(){
   resetGameContainer(4);
   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let p = document.createElement('p');
   p.innerHTML = "Round 4 !<br/>Choose your Move!";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+4);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round4);
   });
}

function round4(){
   resetGameContainer(5);
   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let p = document.createElement('p');
   p.innerHTML = "Round 5 !<br/>Choose your Move!";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+5);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round5);
   });
}

function round5(){
   resetGameContainer('-final');
   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let finalBtns = document.querySelectorAll('.button-container');
   finalBtns.forEach(finalBtn=>{
      finalBtn.remove();
   });

   getGameOver();
}

function startGame(){
   resetGameContainer(1);

   let p = document.createElement('p');
   p.innerHTML = "Round 1 !<br>Choose your Move!";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('button');
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round1);
   });
}

function getGameOver(){
   let newP = document.createElement('p');
   txtArea.appendChild(newP);
   
   //IT'S A TIE
   if(playerScore==cpuScore){
      newP.textContent = "IT'S A TIE! You have to play again!";
      txtArea.appendChild(newP);

      /* RESTART THE GAME */ 

   }   
   else { 
      //YOU WIN
      if(playerScore>cpuScore){
         newP.textContent = "YOU WIN! CONGRATULATION! THE EARTH IS SAFE NOW";
         txtArea.appendChild(newP);
         return;
      }
      //YOU LOSE
      else{
         newP.textContent = "YOU LOSE! EVERYONE IS FUCKING DEAD!!!";
         txtArea.appendChild(newP);
         return;
      } 
   }
}