import { React } from "react";
import QuestionBox from "../Helpers/QuestionBox";

function GameScreen(props) {
	const quizQuestions = props.quizData.map((question) => {
		return (
			<QuestionBox
				disabled={props.disabled}
				chooseAnswer={props.chooseAnswer}
				key={question.id}
				{...question}
			/>
		);
	});

	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>
			<section className="game-screen">{props.quizData && quizQuestions}</section>
			{props.disabled && (
				<>
					<h2>Correct Answers:</h2> {props.score} / {props.quizData.length}
				</>
			)}
			<div className="center">
				{props.disabled ? (
					<button className="start-button" role="button" onClick={props.startGame}>
						Play Again!
					</button>
				) : (
					<button className="accent-button" role="button" onClick={props.checkAnswers}>
						Check Answers
					</button>
				)}
			</div>
		</>
	);
}

export default GameScreen;
