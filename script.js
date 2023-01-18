const cells = document.querySelectorAll('td');
let player = 'X';

// Add click event to each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (this.textContent === '') {
      this.textContent = player;
      checkForWin();
      switchPlayer();
    }
  });
}

function switchPlayer() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
}

function checkForWin() {
  // Check rows
  for (let i = 0; i <= 6; i += 3) {
    if (cells[i].textContent === player && cells[i+1].textContent === player && cells[i+2].textContent === player) {
      alert(`Player ${player} wins!`);
      resetBoard();
    }
  }

  // Check columns
  for (let i = 0; i <= 2; i++) {
    if (cells[i].textContent === player && cells[i+3].textContent === player && cells[i+6].textContent === player) {
      alert(`Player ${player} wins!`);
      resetBoard();
    }
  }

  // Check diagonals
  if (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) {
    alert(`Player ${player} wins!`);
    resetBoard();
  }
  
  if (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player) {
    alert(`Player ${player} wins!`);
    resetBoard();
  }
  
  let isDraw = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      isDraw = false;
      break;
    }
  }
  if(isDraw) {
    alert(`Its a Draw!!`);
    resetBoard();
  }
}

function resetBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
}
