import React from "react";

function GameScreen(props) {
	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>
			<section className="game-screen">
				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>

				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>
				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>
				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>
				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>
				<section className="question-container">
					<p className="question">
						Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of
						these is NOT one of them?
					</p>
					<article className="button-container">
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 1
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 2
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 3
						</button>
						<button className="choice-button" role="button" onClick={props.startGame}>
							Ghost 4
						</button>
					</article>
				</section>
			</section>
			<div className="center">
				<button className="start-button" role="button" onClick={props.startGame}>
					Start Quizzical
				</button>
			</div>
		</>
	);
}

export default GameScreen;
