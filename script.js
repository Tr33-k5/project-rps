const txtArea = document.querySelector('.text-area');
const btnContainer = document.querySelector('.button-container');
let playerScore = 0;
let cpuScore = 0;

/* Click the button to start the game */
let btnStart = document.querySelector('.button-start');
btnStart.addEventListener('click', startGame);

/* Chose randomly an option between 'rock', 'paper and 'scissors' for the cpu */
function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);
   let option;
   if (random===0){ option = 'ROCK'; }
   if (random===1){ option = 'PAPER'; }
   if (random===2){ option = 'SCISSORS'; }
   return option;
}
/* Play a round and display a message if won or lost, and the score */
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
      let p = document.createElement('p');
      /*player choses ROCK*/
      if (playerOption == 'ROCK'){
         if(cpuOption == 'PAPER'){        //display: "You Lose this round! Paper beats Rock"
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round! Paper beats Rock";
            txtArea.appendChild(p);
         }
         else{                            //display: "You win this round!! Rock beats Scissors"
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
      }
      /*player choses PAPER*/
      if (playerOption=='PAPER'){
         if(cpuOption=='SCISSORS'){      //display: "You Lose this round!! Scissors beats Paper"
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
         else{                           //display: "You win this round!! Paper beats Rock"
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Paper beats Rock";
            txtArea.appendChild(p);
         }
      }
      /*player choses SCISSORS*/
      if (playerOption=='SCISSORS'){
         if(cpuOption=='ROCK'){          //display: "You Lose this round!! Rock beats Scissors"
            cpuScore++;
            p = document.createElement('p');
            p.textContent = "You Lose this round!! Rock beats Scissors";
            txtArea.appendChild(p);
         }
         else{                           //display: "You win this round!! Scissors beats Paper"
            playerScore++;
            p = document.createElement('p');
            p.textContent = "You win this round!! Scissors beats Paper";
            txtArea.appendChild(p);
         }
      }
   }

   let scoreP = document.createElement('p');
   scoreP.innerHTML = "SCORE POINTS<br/>"+
               "Player:"+playerScore+"<br/>"+
               "CPU:"+cpuScore;
   txtArea.appendChild(scoreP);
}
/* Erase the content of the text-area
reset the content of the button-container
with new buttons for the corresponding round */
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
/* Event Listener for round 1 */
function round1(){
   resetGameContainer(2);
   let p = document.createElement('p');
   p.innerHTML = "ROUND 1";
   txtArea.appendChild(p);

   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   p = document.createElement('p');
   p.innerHTML = "Get ready for round 2 !<br/>Choose your Move :";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+2);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round2);
   });
}
/* Event Listener for round 2 */
function round2(){
   resetGameContainer(3);
   let p = document.createElement('p');
   p.innerHTML = "ROUND 2";
   txtArea.appendChild(p);

   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   p = document.createElement('p');
   p.innerHTML = "Get ready for round 3 !<br/>Choose your Move :";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+3);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round3);
   });
}
/* Event Listener for round 3 */
function round3(){
   resetGameContainer(4);
   let p = document.createElement('p');
   p.innerHTML = "ROUND 3";
   txtArea.appendChild(p);

   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   p = document.createElement('p');
   p.innerHTML = "Get ready for round 4 !<br/>Choose your Move :";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+4);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round4);
   });
}
/* Event Listener for round 4 */
function round4(){
   resetGameContainer(5);
   let p = document.createElement('p');
   p.innerHTML = "ROUND 4";
   txtArea.appendChild(p);

   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   p = document.createElement('p');
   p.innerHTML = "Get ready for the final round ! <br/>Choose your Move :";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('#btn-rd'+5);
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round5);
   });
}
/* Event Listener for round 5 */
function round5(){
   resetGameContainer('-final');
   let p = document.createElement('p');
   p.innerHTML = "FINAL ROUND";
   txtArea.appendChild(p);

   let playerChoice = this.getAttribute('data-option');
   let cpuChoice = getComputerChoice();
   playOneRound(playerChoice,cpuChoice);

   let finalBtns = document.querySelectorAll('#btn-rd-final');
   finalBtns.forEach(finalBtn=>{
      finalBtn.remove();
   });

   getGameOver();
}
/* Start the game, initialize player and cpu score */
function startGame(){
   playerScore = 0;
   cpuScore = 0;
   resetGameContainer(1);

   let p = document.createElement('p');
   p.innerHTML = "Get ready for round 1 !<br>Choose your Move :";
   txtArea.appendChild(p);

   let roundButtons = document.querySelectorAll('button');
   roundButtons.forEach(roundButton => {
      roundButton.addEventListener('click',round1);
   });
}
/* Display the Game Over text
Click on 'Restart' to restart the game*/
function getGameOver(){ 
   //IT'S A TIE
   if(playerScore==cpuScore){
      let newP = document.createElement('p');
      newP.innerHTML = "THIS GAME IS A TIE<br/><br/>You have to play again.";
      txtArea.appendChild(newP);

      // Create a 'restart' button
      let BtnRestart = document.createElement('button');
      BtnRestart.classList.add('button-start');
      BtnRestart.textContent = 'RESTART';
      btnContainer.appendChild(BtnRestart);

      // Click the button to restart the game
      BtnRestart.addEventListener('click', startGame);

   }   
   else { 
      //YOU WIN
      if(playerScore>cpuScore){
         let newP = document.createElement('p');
         newP.innerHTML = "YOU WON THE GAME ! CONGRATULATIONS !<br/><br/>Our planet is safe now.";
         txtArea.appendChild(newP);
         
         // Create a 'restart' button
         let BtnRestart = document.createElement('button');
         BtnRestart.classList.add('button-start');
         BtnRestart.textContent = 'RESTART';
         btnContainer.appendChild(BtnRestart);

         // Click the button to restart the game
         BtnRestart.addEventListener('click', startGame);
      }
      //YOU LOSE
      else{
         let newP = document.createElement('p');
         newP.innerHTML = "YOU LOST THE GAME!<br/><br/>Earth is in grave danger now.";
         txtArea.appendChild(newP);
         
         // Create a 'restart' button
         let BtnRestart = document.createElement('button');
         BtnRestart.classList.add('button-start');
         BtnRestart.textContent = 'RESTART';
         btnContainer.appendChild(BtnRestart);

         // Click the button to restart the game
         BtnRestart.addEventListener('click', startGame);
      } 
   }
}