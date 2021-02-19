const scoreboard = document.querySelector("#scoreboard");
const playerChoice = document.querySelector("#player-choice");
const resultMessage = document.querySelector("#result-message");

function game() {
	function rpc(choiceIndex) {
		const randNumInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
		let computerChoiceIndex = randNumInRange(0, 3);

		let computerChoice;
		switch (computerChoiceIndex) {
			case 0:
				computerChoice = "Rock";
				break;
			case 1:
				computerChoice = "Paper";
				break;
			case 2:
				computerChoice = "Scissors";
				break;
		}

		let result;
		let condition = computerChoiceIndex - choiceIndex;
		if (condition == 1 || condition == -2) {
			result = "lost";
			computerScore += 1;
		}
		else if (condition == -1 || condition == 2) {
			result = "win";
			playerScore += 1;
		}
		else result = "tie";

		resultMessage.innerHTML = `Computer choice: ${computerChoice} | Result: ${result}`;

		scoreboard.innerHTML = `Player score: ${playerScore} | Computer score: ${computerScore}`;
	}

	let playerScore = 0;
	let computerScore = 0;

	Array.from(playerChoice.childNodes)
		.filter(choice => choice.nodeName == "IMG")
		.forEach((choice, index) => {
			choice.addEventListener('click', () => {
				rpc(index);
			})
		})
}
game();