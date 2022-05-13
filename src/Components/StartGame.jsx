import React from "react";

function StartScreen(props) {
	return (
		<section className="start-screen">
			<h1>Quizzical</h1>
			<p className="subtitle neg-margin-top" role="note">
				Powered by{" "}
				<a
					href="https://opentdb.com"
					target="_blank"
					rel="noopener noreferrer"
					alt="Link to Open Trivia API"
					role={"link"}
				>
					Open Trivia API
				</a>
			</p>
			<p className="subtitle" role="note">
				Coded with 💚 by{" "}
				<a
					href="https://github.com/line-em"
					target="_blank"
					rel="noopener noreferrer"
					alt="Link to Open Trivia API"
					role={"link"}
				>
					@Line-em.
				</a>
			</p>
			<button className="start-button" role="button" onClick={props.startGame}>
				Start Quizzical
			</button>
		</section>
	);
}

export default StartScreen;
