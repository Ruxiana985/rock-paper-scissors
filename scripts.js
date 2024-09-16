let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissors');  
let point1 =  document.querySelector('.user-point');
let point2 =  document.querySelector('.comp-point');
let start=document.querySelector('.start');
let trail=document.querySelector('.trail');
let count1 = 0;
let count2 = 0;
let round=0;


function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}


function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
}
  

rock.onclick = function() {
  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0: // computer chooses rock
      // Tie, no one scores
      break;
    case 1: // computer chooses paper
      count2++; // Computer wins
      break;
    case 2: // computer chooses scissors
      count1++; // User wins
      break;
  }
  round++;
  updateScore();
  counter();
};


paper.onclick = function() {
  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0: // computer chooses rock
      count1++; // User wins
      break;
    case 1: // computer chooses paper
      // Tie, no one scores
      break;
    case 2: // computer chooses scissors
      count2++; // Computer wins
      break;
  }
  updateScore();
  round++;
  counter();
};


scissor.onclick = function() {
  let compchoice = Math.floor(Math.random() * 3);
  switch (compchoice) {
    case 0: // computer chooses rock
      count2++; // Computer wins
      break;
    case 1: // computer chooses paper
      count1++; // User wins
      break;
    case 2: // computer chooses scissors
      // Tie, no one scores
      break;
  }
  updateScore();
  round++;
  counter();
};

start.onclick= function starting(){
  count1 = 0;
  count2 = 0;
  round = 0;
  trail.textContent = "Starting a new game!";
  updateScore();
  enableButtons();
}
  function counter(){
    if (round == 5) {
      disableButtons(); 
    if (count1 > count2) {
      trail.textContent = "Game over! You won! Click Start to play again.";
    } else if (count1 < count2) {
      trail.textContent = "Game over! Computer won! Click Start to play again.";
    } else {
      trail.textContent = "It's a tie! Click Start to play again.";
    }
    start.disabled = false;
  }
      
}
  



function updateScore() {
  point1.textContent = `User Score: ${count1}`;
  point2.textContent = `Computer Score: ${count2}`;
}
