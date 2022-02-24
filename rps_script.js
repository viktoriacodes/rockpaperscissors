let result = 'Start';
let humanSelection;
let aiSelection;
let humanScore = 0;
let aiScore = 0;

function playGame(humanInput) {
  humanSelection = humanInput.textContent;
  aiSelection = getAiSelection();
  let result = calcResult(humanSelection, aiSelection);
  document.getElementById("vs-text").innerText = humanSelection + ' VS ' + aiSelection;
  showScore();
}

function getAiSelection() {
  const options = ['rock', 'paper', 'scissors'];
  let aiSelector = options[Math.floor(Math.random()*options.length)];
  return aiSelector;
}

function calcResult(human, ai) {
  
  if (human === ai) {
    result = 'Draw'
    return;
  } else if ((human === 'rock' && ai === 'scissors') || 
  (human === 'paper' && ai === 'rock') || (human === 'scissors' && ai === 'paper')) {
    humanScore += 1;

    if (humanScore == 5) {
      result = "You are the winner!";
      endgame();
    } else {
      result = 'You win!'
      return;
    }

  } else {
    aiScore += 1;
    if (aiScore == 5) {
      result = 'Computer is the Winner'
      endgame();
    } else {
      result = ' You lose!'
      return;
    }
  }
}

function showScore() {
  document.getElementById("playerscore").innerText = humanScore;
  document.getElementById("aiscore").innerText = aiScore;
  document.getElementById("result").innerText = result;

}

function endgame() {
  const ele = document.getElementById('startgame');
  ele.remove();
  document.getElementById("endgame").style.display = "block";
  showScore();
}

