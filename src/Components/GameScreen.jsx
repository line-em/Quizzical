import { React, useEffect } from "react";
import QuestionBox from "./QuestionBox";

function GameScreen(props) {
	if (props.quizData.length > 0) {
		console.log(props.quizData.questions);
	}

	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>
			<section className="game-screen">
				<QuestionBox />
			</section>
			<div className="center">
				<button className="start-button" role="button" onClick={props.resetGame}>
					Submit Answers
				</button>
			</div>
		</>
	);
}

export default GameScreen;
