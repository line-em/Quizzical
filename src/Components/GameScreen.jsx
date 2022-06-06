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

	const scoreStyles = {
		backgroundColor: props.score === props.quizData.length ? "var(--green)" : "var(--teal)",
		color: "var(--white)"
	};

	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>
			<section className="game-screen">{props.quizData && quizQuestions}</section>
			{props.disabled && (
				<div className="check-answers-container" style={scoreStyles}>
					<h2>Correct Answers:</h2>
					<p>
						{props.score} / {props.quizData.length}
					</p>
				</div>
			)}
			{props.quizError && (
				<div className="check-answers-container">
					<h2>Please answer all questions!</h2>
				</div>
			)}
			<div className="center">
				{props.disabled ? (
					<button className="start-button" role="button" onClick={props.playAgain}>
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
