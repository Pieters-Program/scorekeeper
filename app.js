const p1 = {
    name: 1,
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    name: 2,
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const winner = document.querySelector('#winner')
const resetButton = document.querySelector('#reset')
const upTo = document.querySelector('#gameUpTo')
let isGameOver = false;
let winningScore = 5;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            winner.textContent = `Player ${player.name} wins!`
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

upTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

resetButton.addEventListener('click', resetGame)

function resetGame() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        winner.textContent = 'And the winner is ...'
    }
}