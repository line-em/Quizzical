import React from "react";

function StartGame() {
	return (
		<>
			<h1>Quizzical</h1>
			<p className="subtitle">
				Powered by{" "}
				<a href="https://opentdb.com" target="_blank" rel="noopener noreferrer">
					Open Trivia API
				</a>
			</p>
			<button className="start-button">Start Quizzical</button>
		</>
	);
}

export default StartGame;
