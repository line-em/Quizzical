import { React, useState } from "react";
import QuestionBox from "../Helpers/QuestionBox";

function GameScreen(props) {
	const quizQuestions = props.quizData.map((question) => {
		return <QuestionBox chooseAnswer={props.chooseAnswer} key={question.id} {...question} />;
	});

	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>
			<section className="game-screen">{props.quizData && quizQuestions}</section>
			{props.quizData && (
				<p>
					Correct Answers: {props.score} / {props.quizData.length}
				</p>
			)}
			<div className="center">
				{/* <button className="accent-button" role="button" onClick={props.checkAnswer}>
					Check Answers
				</button> */}
				<button className="start-button" role="button" onClick={props.startGame}>
					Play Again!
				</button>
			</div>
		</>
	);
}

export default GameScreen;
