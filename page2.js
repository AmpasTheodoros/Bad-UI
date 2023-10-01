let ballPosition;
let gameStarted = false;

function hideBall() {
    ballPosition = Math.floor(Math.random() * 3) + 1;
}

function revealBall() {
    const cups = document.querySelectorAll('.cup');
    cups[ballPosition - 1].classList.add('with-ball');
}

function startGame() {
    if (gameStarted) return;
    
    hideBall();
    revealBall();
    
    const cups = document.querySelectorAll('.cup');
    cups.forEach(cup => {
        cup.addEventListener('click', () => {
            if (cup.id === `cup${ballPosition}`) {
                const message = document.getElementById('message');
                message.textContent = 'Congratulations! You found the ball! Lets go to page 3!';
                message.href = 'page3.html'; // Add the href attribute
                cups[ballPosition - 1].classList.add('wining-ball');
            } else {
                document.getElementById('message').textContent = 'Sorry, try again!';
                cups[ballPosition - 1].classList.remove('wining-ball');
                hideBall()
            }
            revealBall();
            gameStarted = true;
        });
    });
}
