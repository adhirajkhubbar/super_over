const team1Superover = document.getElementById('team1-superover');
const team2Superover = document.getElementById('team2-superover');
const strikeButton = document.getElementById('strike');
const resetButton = document.getElementById('reset');
const scoreTeam1 = document.getElementById('score-team1');
const scoreTeam2 = document.getElementById('score-team2');
const wicketsTeam1 = document.getElementById('wickets-team1');
const wicketsTeam2 = document.getElementById('wickets-team2');

let currentCircleTeam1 = 0;
let currentCircleTeam2 = 0;
let isTeam1Turn = true;

strikeButton.addEventListener('click', () => {
    const generateRandomNumber = () => Math.floor(Math.random() * 7);

    if (isTeam1Turn) {
        const team1Score = generateRandomNumber();
        team1Superover.children[currentCircleTeam1].textContent = team1Score;
        scoreTeam1.textContent = +scoreTeam1.textContent + team1Score;

        if (team1Score === 0) {
            wicketsTeam1.textContent = +wicketsTeam1.textContent + 1;
        }

        currentCircleTeam1++;
        if (currentCircleTeam1 >= team1Superover.children.length) {
            isTeam1Turn = false; 
            currentCircleTeam1 = 0;
        }
    } else {
        const team2Score = generateRandomNumber();
        team2Superover.children[currentCircleTeam2].textContent = team2Score;
        scoreTeam2.textContent = +scoreTeam2.textContent + team2Score;

        if (team2Score === 0) {
            wicketsTeam2.textContent = +wicketsTeam2.textContent + 1;
        }

        currentCircleTeam2++;
        if (currentCircleTeam2 >= team2Superover.children.length) {
            isTeam1Turn = true; 
            currentCircleTeam2 = 0; 
        }
    }
});

resetButton.addEventListener('click', () => {
    scoreTeam1.textContent = '0';
    scoreTeam2.textContent = '0';
    wicketsTeam1.textContent = '0';
    wicketsTeam2.textContent = '0';

    for (let i = 0; i < team1Superover.children.length; i++) {
        team1Superover.children[i].textContent = '';
    }
    for (let i = 0; i < team2Superover.children.length; i++) {
        team2Superover.children[i].textContent = '';
    }

    currentCircleTeam1 = 0;
    currentCircleTeam2 = 0;
    isTeam1Turn = true;
});
