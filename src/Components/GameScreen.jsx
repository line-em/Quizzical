import { React, useState } from "react";
import QuestionBox from "./QuestionBox";

function GameScreen(props) {
	function chooseAnswer(answer) {
		props.setQuizData(
			props.quizData.map((quiz) => {
				if (quiz.id === answer.id) {
					quiz.current_answer = answer;
				}
				return quiz;
			})
		);
		console.log(props.quizData);
	}

	const quizQuestions = props.quizData.map((question) => {
		return <QuestionBox chooseAnswer={chooseAnswer} key={question.id} {...question} />;
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
				<button className="accent-button" role="button" onClick={props.checkAnswer}>
					Check Answers
				</button>
				<button className="start-button" role="button" onClick={props.resetGame}>
					Play Again!
				</button>
			</div>
		</>
	);
}

export default GameScreen;
